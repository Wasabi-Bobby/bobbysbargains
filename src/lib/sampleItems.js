const MIN = 60 * 1000
const DAY = 24 * 60 * MIN
const daysAgo = (d) => Date.now() - d * DAY
const minutesFromNow = (m) => Date.now() + m * MIN

export const SAMPLE_ITEMS = [
    { id: 'i1', title: 'Glass mixing bowl set (3)', category: 'Kitchen', condition: 'Good', price: 18, wasPrice: null, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(1), image: '' },
    { id: 'i2', title: 'Cordless drill, 18V (tool only)', category: 'Tools', condition: 'Like new', price: 45, wasPrice: null, status: 'reserved', reservedBy: 'demo-user', reservedUntil: minutesFromNow(12), createdAt: daysAgo(10), image: '' },
    { id: 'i3', title: 'Straight-leg jeans, 32x30', category: 'Clothing', condition: 'Good', price: 14, wasPrice: 20, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(12), image: '' },
    { id: 'i4', title: 'Game console controller, wired', category: 'Electronics', condition: 'Fair', price: 22, wasPrice: null, status: 'sold', reservedBy: null, reservedUntil: null, createdAt: daysAgo(20), image: '' },
    { id: 'i5', title: 'Mid-century table lamp', category: 'Home', condition: 'Good', price: 35, wasPrice: null, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(2), image: '' },
    { id: 'i6', title: 'Hardcover cookbook bundle (5)', category: 'Books', condition: 'Good', price: 10, wasPrice: null, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(9), image: '' },
    { id: 'i7', title: 'Two-burner camp stove', category: 'Outdoors', condition: 'Like new', price: 28, wasPrice: null, status: 'reserved', reservedBy: 'someone-else', reservedUntil: minutesFromNow(-5), createdAt: daysAgo(15), image: '' },
    { id: 'i8', title: 'Cast iron skillet, 10 in', category: 'Kitchen', condition: 'Good', price: 16, wasPrice: null, status: 'sold', reservedBy: null, reservedUntil: null, createdAt: daysAgo(30), image: '' },
    { id: 'i9', title: 'Portable Bluetooth speaker', category: 'Electronics', condition: 'Good', price: 19, wasPrice: 25, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(14), image: '' },
    { id: 'i10', title: "Kids' bike, 16 in", category: 'Outdoors', condition: 'Fair', price: 30, wasPrice: null, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(8), image: '' },
    { id: 'i11', title: 'Wool winter coat, size M', category: 'Clothing', condition: 'Like new', price: 24, wasPrice: null, status: 'reserved', reservedBy: 'someone-else', reservedUntil: minutesFromNow(9), createdAt: daysAgo(11), image: '' },
    { id: 'i12', title: 'Building bricks, 2 lb mixed lot', category: 'Toys', condition: 'Good', price: 20, wasPrice: null, status: 'available', reservedBy: null, reservedUntil: null, createdAt: daysAgo(3), image: '' },
]