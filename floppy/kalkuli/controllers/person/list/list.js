steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/person.ejs','lib/js/jquery.colorPicker.js','lib/css/colorPicker.css', function($) {

		$.Controller('Kalkuli.Controllers.Person.List', {
			init : function(){
				this.options.list.findAll();
			},

			'.addPersonButton click': function (el, ev) {
				var person = new Kalkuli.Models.Person({name: 'Toto', balance: 0.0});
				person.save();
				this.options.list.push(person);
			},

			'{list} add': function (list, ev, newItems) {
				var widget = this;
				$.each(newItems, function() {
					var item = this;
					widget.find('table').append(widget.drawPerson(item));
				});
			},

			drawPerson: function(person) {
				var row = $.View("//kalkuli/controllers/person/list/views/person.ejs",{
						person: person
					});
				var $row = $(row)
				$row.kalkuli_person({person: person, parent: this});
				$row.find('.colorPicker').colorPicker();
				return $row;
			}
		});

		$.Controller('Kalkuli.Controllers.Person', {
			'.colorPicker change': function (el, ev) {
				el.model().attr('color', el.val());
				el.model().save();
				//this.options.person.attr('color', el.val()).save();
			},

			'{person} updated': function (list, ev, item) {
				this.element.replaceWith(this.options.parent.drawPerson(this.options.person));
			},
		});

	});

