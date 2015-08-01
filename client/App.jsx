App = React.createClass ({

	mixins: [ReactMeteorData],

	getMeteorData: function() {
	   return {
	     items: ItemsCollection.find({}).fetch()
	   };
	 },

	getInitialState: function(){
		return {}
	},

	render: function(){
		return (
		     <div>
		       <ul>
		         {this.data.items.map(function (item) {
		           return <li key={item._id}>{item.content}</li>;
		         })}
		       </ul>
		       <form onSubmit={this.addItem}>
		         <input type="text" ref="input"/>
		         <button className="btn btn-primary" type="submit">Add Item</button>
		       </form>
		     </div>
		   )
	}
})

