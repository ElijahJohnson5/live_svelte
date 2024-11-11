import {normalizeComponents} from "./utils"
import {render} from "svelte/server"

export function getRender(components) {
    components = normalizeComponents(components)

    return function r(name, props, slots) {
        const Component = components[name]
        // // const $$slots = Object.fromEntries(Object.entries(slots).map(([k, v]) => [k, () => v]))
        return render(Component, {props: props})
    }
}
