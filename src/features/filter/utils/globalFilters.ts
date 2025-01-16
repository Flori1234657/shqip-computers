export const calculateLableValue = (values: number[]) => {
    const calculatedValueA = (values[0] / 100) * 3500;
    const calculatedValueB = (values[1] / 100) * 3500;

    return [calculatedValueA.toFixed(0), calculatedValueB.toFixed(0)];
};

export const buildPriceQuery = (values: number[]) => {
    if (values[0] === 0 && values[1] === 3500) return null;

    return `&filters[defaultPrice][$gte]=${calculateLableValue(values)[0]}&filters[defaultPrice][$lte]=${calculateLableValue(values)[1]}`;
};

export const updateFilterQuery = (
    currentFilterQuery: string,
    newFilterString: string
) => {
    type Filters = Record<string, Record<string, string>>;
    // Helper function to parse the filters into a key-value map
    function parseFilters(query: string): Filters {
        const filters: Filters = {};
        const regex = /&filters\[([^\]]+)\](?:\[([^\]]+)\])?=([^&]+)/g; // Modified regex
        let match: RegExpExecArray | null;

        while ((match = regex.exec(query)) !== null) {
            const [, filterKey, filterType, filterValue] = match;
            if (!filters[filterKey]) filters[filterKey] = {};
            filters[filterKey][filterType || '$eq'] = filterValue; // Default to $eq if no filterType is provided
        }

        return filters;
    }

    // Parse the current and new filters into objects
    const currentFilters: Filters = parseFilters(currentFilterQuery);
    const newFilters: Filters = parseFilters(newFilterString);

    // Update the current filters with the new filters
    for (const [key, types] of Object.entries(newFilters)) {
        if (!currentFilters[key]) currentFilters[key] = {};
        Object.assign(currentFilters[key], types); // Merge filter values
    }

    // Reconstruct the query string from the updated filters
    let updatedQuery = '';
    for (const [key, types] of Object.entries(currentFilters)) {
        for (const [type, value] of Object.entries(types)) {
            updatedQuery += `&filters[${key}][${type}]=${value}`;
        }
    }

    return updatedQuery;
};
