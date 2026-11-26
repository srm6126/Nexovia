export default async function handler(_req: any, res: any) {
  res.status(200).json({
    ok: true,
    app: "SHAHIN APP",
    message: "API runtime is reachable. Business integrations are not configured by this health check."
  });
}
