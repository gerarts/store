import { envGlobal } from './envGlobal';
import { init } from './init';

test('Expect @@INIT to be fired on the default reducer when store init has been finished', () => {
    init();
    expect(envGlobal.store.getState().$$ready).toEqual(true);
});
