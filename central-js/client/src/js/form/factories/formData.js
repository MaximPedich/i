define('formData/factory', ['angularAMD', 'parameter/factory', 'datepicker/factory'], function (angularAMD) {
	angularAMD.factory('FormDataFactory', ['ParameterFactory', 'DatepickerFactory',
		function(ParameterFactory, DatepickerFactory) {
		
			var FormDataFactory = function() {
				this.processDefinitionId = null;
			
				this.fields = {};
				this.params = {};
			};
			
			FormDataFactory.prototype.initialize = function(ActivitiForm) {
				this.processDefinitionId = ActivitiForm.processDefinitionId;
				for(var key in ActivitiForm.formProperties) {
					var property = ActivitiForm.formProperties[key];
					switch(property.type) {
						case 'date':
							this.params[property.id] = new DatepickerFactory();
							this.params[property.id].value = property.value;
							break;
						default:
							this.params[property.id] = new ParameterFactory();
							this.params[property.id].value = property.value;
							break;
					}
				}
			};
			
			FormDataFactory.prototype.hasParam = function(param) {
				return this.params.hasOwnProperty(param);
			};
			
			FormDataFactory.prototype.setBankIDAccount = function(BankIDAccount) {
				return angular.forEach(BankIDAccount.customer, function(value, key) {
					var field = 'bankId'+key;
					
					if(this.hasParam(field)) {
						this.fields[field] = true;
						this.params[field].value = value;
					}
				}, this);
			};
			
			FormDataFactory.prototype.getRequestObject = function() {
				var data = {
					processDefinitionId: this.processDefinitionId,
					params: {}
				};
				for(var key in this.params) {
					var param = this.params[key];
					data.params[key] = param.get();
				}
				return data;
			};
			
			return FormDataFactory;
		}
	]);
});