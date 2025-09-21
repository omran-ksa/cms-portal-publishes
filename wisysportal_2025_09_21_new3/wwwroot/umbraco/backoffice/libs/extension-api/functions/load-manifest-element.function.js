/**
 *
 * @param property
 */
export async function loadManifestElement(property) {
    const propType = typeof property;
    if (propType === 'function') {
        if (property.prototype) {
            // Class Constructor
            return property;
        }
        else {
            // Promise function
            const result = await property();
            if (typeof result === 'object' && result !== null) {
                const exportValue = ('element' in result ? result.element : undefined) ||
                    ('default' in result ? result.default : undefined);
                if (exportValue && typeof exportValue === 'function') {
                    return exportValue;
                }
            }
        }
    }
    else if (propType === 'string') {
        // Import string
        const result = await import(
        /* @vite-ignore */ property);
        if (result && typeof result === 'object') {
            const exportValue = ('element' in result ? result.element : undefined) || ('default' in result ? result.default : undefined);
            if (exportValue && typeof exportValue === 'function') {
                return exportValue;
            }
        }
    }
    return undefined;
}
