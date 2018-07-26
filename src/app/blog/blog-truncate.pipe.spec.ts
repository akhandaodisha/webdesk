import { BlogTruncatePipe } from './blog-truncate.pipe';

describe('BlogTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new BlogTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});
