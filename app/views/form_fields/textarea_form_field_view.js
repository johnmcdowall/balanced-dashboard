Balanced.TextAreaFormFieldView = Balanced.BaseFormFieldView.extend({
	templateName: "form_fields/textarea_form_field",
	maxlength: 0,
	explanationText: function() {
		var maxLength = this.get('maxlength');

		if (maxLength > 0) {
			var noteLength = this.get('model.note') ? this.get('model.note.length') : 0;
			var remaining = maxLength - noteLength;
			return "%@ characters remaining".fmt(remaining);
		}
	}.property('model.note.length'),

});
