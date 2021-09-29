import { PlainCommand } from '@symbol-dapp/core';
import { Address, PublicAccount } from 'symbol-sdk';
import { ReviewState } from './ReviewState';

export abstract class CreateReviewCommand extends PlainCommand<ReviewState> {
  public static TYPE = 'review.CreateReview';
  public static VERSION = 1;

  constructor (id: string, journal: Address, reviewState: ReviewState, signer?: PublicAccount) {
    super(id, journal, CreateReviewCommand.TYPE, CreateReviewCommand.VERSION, reviewState, signer);
  }
}