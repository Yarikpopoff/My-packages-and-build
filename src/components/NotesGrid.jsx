var React = require('react');
var Note = require('./Note.jsx');

require('./style.css');


var NotesGrid = React.createClass({
			
	componentDidMount: function() {
			
		var grid = this.refs.grid;
		this.msnry = new Masonry( grid, { 
			itemSelector: '.note',
			columnWidth: 200,
			gutter: 10
		});
	},

	componentDidUpdate: function(prevProps) {
		
		if (this.props.notes.length !== prevProps.notes.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	},

	render: function() {
		var onNoteDelete = this.props.onNoteDelete;

		return (
			<div className="notes-grid" ref="grid">
				{
					this.props.notes.map(function(note) {
                   		return (
                       		<Note
                           		key={note.id}
                           		onDelete={onNoteDelete.bind(null, note)}
                           		color={note.color}>
                           		{note.text}
                       		</Note>
                   		);
                   	})
				}
			</div>
		);
	}
});

module.exports = NotesGrid;