import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user.js';

const user = {
  avatar: `/wtw/static/avatar/6.jpg`,
  email: `asd@asd.ru`,
  id: 1,
  name: `asd`,
};

describe(`Reducer changes the state correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {}
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {}
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {}
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {}
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    });
  });

  it(`Reducer should change user by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {}
    }, {
      type: ActionType.GET_USER,
      payload: user,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user
    });
  });

});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for load user data returns correct action`, () => {
    expect(ActionCreator.getUser(user)).toEqual({
      type: ActionType.GET_USER,
      payload: user,
    });
  });
});
