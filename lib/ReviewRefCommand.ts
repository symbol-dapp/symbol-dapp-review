import { PlainCommand } from "@symbol-dapp/core";
import { Address } from "symbol-sdk";
import { ReviewRef } from ".";

const MAIN_NET_JOURNAL = Address.createFromRawAddress('NDRXQJDLG3DW7XXAVCWPXL2PPEWWZV46KZRBM5A');
const TEST_NET_JOURNAL = Address.createFromRawAddress('TB4NW63IFCB4VFVNYGUOQ3HOAD3LEB3U67AQC7Q');

export class ReviewRefCommand extends PlainCommand<ReviewRef> {
  public static TYPE = 'review.ReviewRef';
  public static VERSION = 1;

  public static of (id: string, reviewRef: ReviewRef): ReviewRefCommand {
    return new ReviewRefCommand(id, MAIN_NET_JOURNAL, ReviewRefCommand.TYPE, ReviewRefCommand.VERSION, reviewRef);
  }

  public static ofTestNet (id: string, reviewRef: ReviewRef): ReviewRefCommand {
    return new ReviewRefCommand(id, TEST_NET_JOURNAL, ReviewRefCommand.TYPE, ReviewRefCommand.VERSION, reviewRef);
  }
}