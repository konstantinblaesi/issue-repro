export async function POST({ request }) {
    // no signature check required to demo issue
    const json = await request.json()
    console.log("Received webhook", json)
    return json({ ok: true })
}