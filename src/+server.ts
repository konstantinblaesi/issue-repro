export async function POST({ request }) {
    // no signature check required to demo issue
    const json = await request.json()
    // json is not always decoded text but sometimes gzip/gibberish/binary
    console.log("Received webhook", json)
    return json({ ok: true })
}