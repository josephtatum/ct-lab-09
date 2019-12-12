const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -1
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 6
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });

  it('has a virtual to give the day of the event', () => {
    const event = new Event({
      name: 'Event',
      dateOfEvent: new Date('2019-12-12')
    });
    expect(event.day).toEqual(11);
  });

  it('has a virtual to set the day of the event', () => {
    const event = new Event({
      name: 'Event',
      dateOfEvent: new Date('2019-12-12')
    });

    event.day = 15;

    expect(event.day).toEqual(15);
  });

  it('has a virtual to give the month of the event', () => {
    const event = new Event({
      name: 'Event',
      dateOfEvent: new Date('2019-12-12')
    });
    expect(event.month).toEqual(11);
  });

  it('has a virtual to set the month of the event', () => {
    const event = new Event({
      name: 'Event',
      dateOfEvent: new Date('2019-12-12')
    });

    event.month = 10;

    expect(event.month).toEqual(10);
  });

  it('has a virtual to give the year of the event', () => {
    const event = new Event({
      name: 'Event',
      dateOfEvent: new Date('2019-12-12')
    });
    expect(event.year).toEqual(2019);
  });
});
