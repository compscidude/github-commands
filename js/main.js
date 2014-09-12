(function($){


	var Todo = Backbone.Model.extend({
			defaults: {
				title: "todo",
				done: false,
				archived: false
				},

			toggle: function(){
				this.set({done : !this.get("done")});
			}
	});


	// we should implement some sort of functionality here, sorting/priority etc.
	var Todos = Backbone.Collection.extend({
		initialize: function() {
			this.add({title : "Todo 1"});
			this.add({title : "Todo 2"});
			this.add({title : "Todo 3"});
		}, 
		model: Todo,
		// here we can filter out certain elements from our collection
		done: function(){
			return this.where({done : true});
		}
	});

	var AppView = Backbone.View.extend({
		el: $(".container"),
		initialize: function() {
			this.input = this.$("#new-todo");
			//this.listenTo(todos, "add", this.addOne);
		},
		events : {
			"keypress #new-todo" : "createOnEnter"
		},


		createOnEnter: function(e){
			if (e.keyCode != 13) return;
			if (!this.input.val()) return;
			todos.add({title: this.input.val()});
			this.input.val("");
			
		},

		addOne: function(todo){
			var view = new TodoView({model: todo});
			this.$("#list-table").append(view.render().el);
		}

	});

	// This item is always inserted in our table. Thus, the tagName could be
	// li or td 
	var TodoView = Backbone.View.extend({
		// we can do something like for each collection, we create a markup 
	 	// and append it to our view.
	 	tagName: 'tr',
	 	template: _.template($('#tmpl-each-item').html()),
	 	initialize: function(){
	 		_.bindAll(this, 'render');
	 	},
	 	render: function(){
	 		this.$el.html(this.template(this.model.toJSON()));
	 		return this;
	 	}
	});

	// The complete view.
	var ListView = Backbone.View.extend({	
		// We don't really need to specify el here since we are explicitly giving the render function
		// the DOM that the rendered template should append to.
		initialize: function(){
			//console.log(this.collection);
			_.bindAll(this, 'render');
			this.render();
		},
		render: function(){
			_.each(this.collection.models, function(item) {
				var itemview = new TodoView({model : item});
				console.log(itemview.render().el);
				$("#list-table").append(itemview.render().el);

			});
		}
	});

	var app = new AppView();
	var todos = new Todos();
	var listview = new ListView({collection: todos});

})(jQuery);


