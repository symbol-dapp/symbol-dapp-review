import { CreateReviewCommand } from "../../lib/CreateReviewCommand"
import { ReviewState } from "../../lib/ReviewState"
import JOURNAL from "./Journal";

export default class CreateProjectReviewCommand extends CreateReviewCommand {

  public static of (name: string, review: ReviewState): CreateProjectReviewCommand {
    return new CreateProjectReviewCommand(name, JOURNAL, review);
  }
}