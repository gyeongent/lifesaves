import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';

const Utterances = React.memo(({ repo, theme }) => {
    const containerRef = createRef();

    useLayoutEffect(() => {
        const utterances = document.createElement('script');
        const attributes = {
            src,
            repo,
            theme,
            'issue-term': 'url',
            label: '✨💬 comments ✨',
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(utterances);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repo]);
    
    return React.createElement("div", { ref: containerRef });
});

Utterances.displayName = 'Utterances';

export default Utterances;