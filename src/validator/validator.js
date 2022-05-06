import {Schema} from "rsuite";
const {StringType, NumberType} = Schema.Types;
const model = Schema.Model({
    text: StringType()
        .minLength(10, 'Minimum length = 10 letter ')
        .isRequired('This field is required.'),
    message: StringType()
        .maxLength(50,'Max length = 50 letter')
        .isRequired('This field is required.'),
})

export default model