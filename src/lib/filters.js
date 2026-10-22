import { toMillis } from './itemStatus'

export const CATEGORIES = [
    'All', 'Kitchen', 'Tools', 'Clothing', 'Electronics',
    'Home', 'Books', 'Outdoors', 'Toys',
]

export const CONDITIONS = ['Like new', 'Good', 'Fair']

export const QUICK_PRICES = [5, 10, 25, 50, 100]

export const DEFAULT_FILTERS =
{
    category: 'All',
    priceMin: '',
    priceMax: '',
    condition: [],
    isNew: false,
    hideSold: true,
}

export const SORT_OPTIONS =
    [
        {
            value: 'newest',
            label: 'Newest first',
            compare: (a, b) => toMillis(b.createdAt) - toMillis(a.createdAt),
            description: 'The most recent listings'
        },

        {
            value: 'price-asc',
            label: 'Price: low to high',
            compare: (a, b) => a.price - b.price,
            description: 'The cheapest items first',
        },

        {
            value: 'price-desc',
            label: 'Price: high to low',
            compare: (a, b) => b.price - a.price,
            description: 'The most expensive items first',
        },
    ]

export function applyFilters(items, filters) {
    const min = filters.priceMin === '' ? 0 : Number(filters.priceMin)
    const max = filters.priceMax === '' ? Infinity : Number(filters.priceMax)

    return items.filter((item) =>
        (filters.category === 'All' || item.category === filters.category) &&
        item.price >= min &&
        item.price <= max &&
        (filters.conditions.length === 0 || filters.conditions.includes(item.condition)) &&
        !(filters.hideSold && item.status === 'sold'))
}

function priceLabel({ priceMin, priceMax }) {
    if (priceMin !== '' && priceMax !== '') {
        return `$${priceMin}-$${priceMax}`
    }

    if (priceMax !== '') {
        return `$${priceMax} & under`
    }

    return `$${priceMin} & up`

}

/** Each active filter becomes a chip with the change that removes it */
export function buildChips(filters) {
    const chips = []

    if (filters.category !== 'All') {
        chips.push({ key: 'category', label: filters.category, reset: { category: 'All' } })
    }

    if (filters.priceMin !== '' || filters.priceMax !== '') {
        chips.push({ key: 'price', label: priceLabel(filters), reset: { priceMin: '', priceMax: '' } })
    }

    filters.conditions.forEach((c) => {
        chips.push({
            key: `cond-${c}`,
            label: c,
            reset: { conditions: filters.conditions.filter((x) => x !== c) },
        })
    })

    if (filters.hideSold) {
        chips.push({ key: 'hideSold', label: 'Hiding sold', reset: { hideSold: false } })
    }

    return chips
}
