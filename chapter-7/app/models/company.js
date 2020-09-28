import Model, { attr } from '@ember-data/model';

export default class CompanyModel extends Model {
  @attr('string') name;
}
