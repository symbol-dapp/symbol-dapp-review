import CreateProjectReviewCommand from "./commons/CreateProjectReviewCommand";

describe('CreateReviewCommand', () => {
  const PROJECT_NAME = 'Symbol-Dapp-Framework'

  test('ensuring it contains the required spec', () => {
    const review = {
      rate: 5,
      content: 'It is super!'
    }
    const command = CreateProjectReviewCommand.of(PROJECT_NAME, review);

    expect(command.id).toBe(PROJECT_NAME);
    expect(command.type).toBe('review.CreateReview');
    expect(command.version).toBe(1);
    expect(command.data).toStrictEqual(review);
  });
});
