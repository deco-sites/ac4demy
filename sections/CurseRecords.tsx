import type { AppContext } from "site/apps/deco/records.ts";
import {curses} from "site/db/schema.ts"

export async function loader(_: null, __: Request, {invoke}: AppContext) {
    const drizzle = await invoke('records/loaders/drizzle.ts');
    const curseData = await drizzle.select({ title: curses.title }).from(curses);
    return {curses: curseData}
}

type SectionProps = Awaited<ReturnType<typeof loader>>

export default function Section({ curses }: SectionProps) {
    return <div>{curses.map(curse => (<div>{curse.title}</div>))}</div>
}
