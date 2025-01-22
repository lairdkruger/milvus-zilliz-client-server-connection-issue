import { Application, Router } from "@oak/oak";
import { MilvusClient } from "@zilliz/milvus2-sdk-node";

const router = new Router();

const ZILLIZ_CLUSTER_ENDPOINT = "";
const ZILLIZ_CLUSTER_TOKEN = "";
const ZILLIZ_COLLECTION_NAME = "";

router.get("/", async (ctx) => {
  const milvusClient = new MilvusClient({
    address: ZILLIZ_CLUSTER_ENDPOINT,
    token: ZILLIZ_CLUSTER_TOKEN,
    ssl: true,
  });

  // const milvusClient = new MilvusClient({
  //   address: '',
  //   token: '',
  //   ssl: true,
  //   channelOptions: {
  //     // starter cluster will throw rejected by server because of excess ping, so we need to adjust the ping interval
  //     "grpc.keepalive_time_ms": 40000, // Adjust the time interval between pings
  //     "grpc.keepalive_timeout_ms": 5000, // Adjust the time to wait for a response to a ping
  //   },
  // });

  //  const milvusClient = new MilvusClient(
  //   "https://in03-6aba294a92b802a.serverless.gcp-us-west1.cloud.zilliz.com:443",
  //   true,
  //   "db_6aba294a92b802a",
  //   "myb9fge_YZU2ctg_nwd",
  // );

  try {
    await milvusClient.connectPromise;
    await milvusClient.loadCollection({
      collection_name: ZILLIZ_COLLECTION_NAME,
    });
    ctx.response.body = "milvus connect success";
  } catch (e) {
    ctx.response.status = 500;
    ctx.response.body = `milvus connect failed: ${e}`;
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
