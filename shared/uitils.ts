export function pathJoin(...args: string[]) {
    // Split the inputs into a list of path commands.
    let parts :string[] = [];
    for (let i = 0, l = args.length; i < l; i++) {
        parts = parts.concat(args[i].split("/"));
    }
    // Interpret the path commands to get the new resolved path.
    const newParts :string[] = [];
    for (let i = 0, l = parts.length; i < l; i++) {
        const part = parts[i];
        // Remove leading and trailing slashes
        // Also remove "." segments
        if (!part || part === ".") {
            continue;
        }
        // Interpret ".." to pop the last segment
        if (part === "..") {
            newParts.pop();
        } else {
            // Push new path segments.
            newParts.push(part);
        }
    }
    // Preserve the initial slash if there was one.
    if (parts[0] === "") {
        newParts.unshift("");
    }
    // Turn back into a single string path.
    return newParts.join("/") || (newParts.length ? "/" : ".");
}