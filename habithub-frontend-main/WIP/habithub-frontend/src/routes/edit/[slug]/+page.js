/** @type {import('./$types').PageLoad} */

export function load({ params }) {
    if (params.slug === 'new') {
        return {
            type: 'new',
            h_data: {
                title: '',
                description: '',
                h_id: ''
            }

        }
    } else {
        return {
            type: 'edit',
            h_data: {
                title: '',
                description: '',
                h_id: ''
            }
        }
    }
}