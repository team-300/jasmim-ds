declare const colors: {
    'brand-pure': string;
    'brand-dark': string;
    'brand-medium-2': string;
    'brand-medium-1': string;
    'brand-light-2': string;
    'brand-light-1': string;
    black: string;
    'gray-8': string;
    'gray-7': string;
    'gray-6': string;
    'gray-5': string;
    'gray-4': string;
    'gray-3': string;
    'gray-2': string;
    'gray-1': string;
    white: string;
    'transparent-light-3': string;
    'transparent-light-2': string;
    'transparent-light-1': string;
    'transparent-dark-3': string;
    'transparent-dark-2': string;
    'transparent-dark-1': string;
    'info-pure': string;
    'info-dark': string;
    'info-medium-2': string;
    'info-medium-1': string;
    'info-light': string;
    'warning-pure': string;
    'warning-dark': string;
    'warning-medium-2': string;
    'warning-medium-1': string;
    'warning-light': string;
    'danger-pure': string;
    'danger-dark': string;
    'danger-medium-2': string;
    'danger-medium-1': string;
    'danger-light': string;
    'gray-dark': string;
    'gray-medium': string;
    'gray-pure': string;
    'blue-dark': string;
    'blue-medium': string;
    'blue-pure': string;
    'green-dark': string;
    'green-medium': string;
    'green-pure': string;
    'red-dark': string;
    'red-medium': string;
    'red-pure': string;
};

declare const fontSizes: {
    'display-1': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'display-2': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'display-3': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'heading-1': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'heading-2': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'heading-3': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'title-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'title-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'subtitle-regular': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'subtitle-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'subtitle-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-1-regular': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-1-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-1-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-2-regular': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-2-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-2-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-3-regular': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-3-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'body-3-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'small-regular': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'small-medium': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
    'small-semibold': (string | {
        lineHeight: string;
        fontWeight: number;
        letterSpacing: number;
    })[];
};

declare const icons: {
    IcoMoonType: string;
    icons: ({
        icon: {
            paths: string[];
            attrs: {}[];
            isMulticolor: boolean;
            isMulticolor2: boolean;
            grid: number;
            tags: string[];
            colorPermutations: {
                "111896412346753124119242124700125118851255255255128156234152168831661332441": {}[];
            };
        };
        attrs: {}[];
        properties: {
            order: number;
            id: number;
            name: string;
            prevSize: number;
            code: number;
            codes?: undefined;
        };
        setIdx: number;
        setId: number;
        iconIdx: number;
    } | {
        icon: {
            paths: string[];
            attrs: ({
                fill: string;
                opacity?: undefined;
            } | {
                fill: string;
                opacity: number;
            })[];
            isMulticolor: boolean;
            isMulticolor2: boolean;
            grid: number;
            tags: string[];
            colorPermutations: {
                "111896412346753124119242124700125118851255255255128156234152168831661332441": {
                    f: number;
                }[];
            };
        };
        attrs: ({
            fill: string;
            opacity?: undefined;
        } | {
            fill: string;
            opacity: number;
        })[];
        properties: {
            order: number;
            id: number;
            name: string;
            prevSize: number;
            code: number;
            codes: number[];
        };
        setIdx: number;
        setId: number;
        iconIdx: number;
    } | {
        icon: {
            paths: string[];
            attrs: {
                fill: string;
            }[];
            isMulticolor: boolean;
            isMulticolor2: boolean;
            grid: number;
            tags: string[];
            colorPermutations: {
                "111896412346753124119242124700125118851255255255128156234152168831661332441": {
                    f: number;
                }[];
            };
        };
        attrs: {
            fill: string;
        }[];
        properties: {
            order: number;
            id: number;
            name: string;
            prevSize: number;
            code: number;
            codes?: undefined;
        };
        setIdx: number;
        setId: number;
        iconIdx: number;
    })[];
    height: number;
    metadata: {
        name: string;
    };
    preferences: {
        showGlyphs: boolean;
        showCodes: boolean;
        showQuickUse: boolean;
        showQuickUse2: boolean;
        showSVGs: boolean;
        fontPref: {
            prefix: string;
            metadata: {
                fontFamily: string;
            };
            metrics: {
                emSize: number;
                baseline: number;
                whitespace: number;
            };
            embed: boolean;
        };
        imagePref: {
            prefix: string;
            png: boolean;
            useClassSelector: boolean;
            color: number;
            bgColor: number;
        };
        historySize: number;
    };
};

export { colors, fontSizes, icons };
