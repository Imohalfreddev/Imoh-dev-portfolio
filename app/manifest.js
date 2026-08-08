export default function manifest() {
    return {
        name: 'Alfred Imoh: Full Stack Developer',
        short_name: 'Alfred Imoh',
        description: "Alfred Imoh is a full-stack software engineer who builds modern, end-to-end web applications with a focus on clean code and real-world impact.",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            }
        ]
    };
}