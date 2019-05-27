import AWS from "aws-sdk-mock";
import { promisify } from "util";
import lambda from "../src/upload";
import eventStub from "./stubs/eventHttpApiGateway.json.js.js";

const handler = promisify(lambda);

describe(`Service aws-node-singned-uploads: S3 mock for successful operations`, () => {
  beforeAll(() => {
    AWS.mock("S3", "getSignedUrl", (method, _, callback) => {
      callback(null, {
        data: "https://example.com"
      });
    });
  });

  afterEach(() => {
    delete process.env.BUCKET;
    delete process.env.REGION;
  });

  afterAll(() => {
    AWS.restore("S3");
  });

  test(`Replies back with a JSON for a signed upload on success`, () => {
    process.env.BUCKET = "foo";
    process.env.REGION = "bar";

    const event = eventStub;
    const context = {};

    const result = handler(event, context);
    expect(result).resolves.toMatchSnapshot();
  });
});
