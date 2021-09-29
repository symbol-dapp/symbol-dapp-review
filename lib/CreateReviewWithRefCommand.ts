import { AggregateCommand } from "@symbol-dapp/core";
import { PublicAccount } from "symbol-sdk";
import { CreateReviewCommand, ReviewRef, ReviewRefCommand } from ".";

export class CreateReviewWithRefCommand extends AggregateCommand {
  public static of (id: string, createReview: CreateReviewCommand, reviewRef: ReviewRef, signer: PublicAccount): CreateReviewWithRefCommand {
    return new CreateReviewWithRefCommand([createReview, ReviewRefCommand.of(id, reviewRef)], signer)
  }
}