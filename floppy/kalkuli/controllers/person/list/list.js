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

			'.colorPicker change': function (el, ev) {
				var model = el.closest('tr').model();
				model.attr('color', el.val());
				model.save();
			},

			'{list} add': function (list, ev, newItems) {
				for (var i = 0; i < newItems.length; i++) {
					this.bind(newItems[i], 'updated', 'personUpdated');

					this.find('table').append(this.drawPerson(newItems[i]));
				}
			},

			personUpdated: function (item, ev) {
				var $newItem = this.drawPerson(item);
				var $oldItem = item.elements(this.element);
				$oldItem.first().replaceWith($newItem);
			},

			drawPerson: function(person) {
				var row = $.View("//kalkuli/controllers/person/list/views/person.ejs",{
						person: person
					});
				var $row = $(row)
				$row.find('.colorPicker').colorPicker();
				return $row;
			}
		});

	});

