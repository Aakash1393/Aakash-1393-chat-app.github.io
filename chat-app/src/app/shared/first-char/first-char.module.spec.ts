import { FirstCharModule } from './first-char.module';

describe('FirstCharModule', () => {
  let firstCharModule: FirstCharModule;

  beforeEach(() => {
    firstCharModule = new FirstCharModule();
  });

  it('should create an instance', () => {
    expect(firstCharModule).toBeTruthy();
  });
});
