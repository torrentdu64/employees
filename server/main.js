
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers} from 'faker';


Meteor.startup( () => {
    const numberRecords = Employees.find({}).count();
    if (!numberRecords) {
        _.time(5000, () => {
              const {email, name, phone } = helpers.createCard();
              Employees.insert({
                  name,
                  email,
                  phone,
                  avatar: image.avatar()
              });
        });
    }
});
