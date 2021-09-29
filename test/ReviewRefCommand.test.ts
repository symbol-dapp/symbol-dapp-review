import { ReviewRef } from "../lib";
import { ReviewRefCommand } from "../lib/ReviewRefCommand";

describe('ReviewRefCommand', () => {
  const PROJECT_NAME = 'Symbol Dapp';
  const REF_URL = `https://symbol.directory/projects/${PROJECT_NAME}`

  test('ensuring it contains the required spec', () => {
    const ref: ReviewRef = {
      url: REF_URL,
      title: `Symbol Directory ${PROJECT_NAME} reviewed`
    };
    const command = ReviewRefCommand.ofTestNet(PROJECT_NAME, ref);

    expect(command.id).toBe(PROJECT_NAME);
    expect(command.type).toBe('review.ReviewRef');
    expect(command.version).toBe(1);
    expect(command.data).toStrictEqual(ref);
  });
});
