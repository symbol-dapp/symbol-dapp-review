import { Account, NetworkType } from "symbol-sdk";
import { CreateReviewCommand, ReviewRef, ReviewRefCommand } from "../lib";
import { CreateReviewWithRefCommand } from "../lib/CreateReviewWithRefCommand";
import CreateProjectReviewCommand from './commons/CreateProjectReviewCommand';

describe('CreateReviewWithRefCommand', () => {
  const PROJECT_NAME = 'Symbol-Dapp-Framework'
  const ACCOUNT = Account.generateNewAccount(NetworkType.TEST_NET);

  test('ensuring it contains the required spec', () => {
    const review = {
      rate: 5,
      content: 'It is super!'
    }
    const reviewRef: ReviewRef = {
      url: `https://symbol.directory/project/Symbol Dapp`,
      title: 'Symbol Dapp Review'
    }
    const command = CreateReviewWithRefCommand.of(PROJECT_NAME, CreateProjectReviewCommand.of(PROJECT_NAME, review), reviewRef, ACCOUNT.publicAccount);

    expect(command.commands).toHaveLength(2);
    expect(command.commands[0].type).toBe(CreateReviewCommand.TYPE);
    expect(command.commands[1].type).toBe(ReviewRefCommand.TYPE);
    expect(command.signer).toStrictEqual(ACCOUNT.publicAccount);
  });
});
