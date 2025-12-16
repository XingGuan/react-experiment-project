const post = require("postcss");
const css = `
    .button {
        color: blue;
        padding: 10px;
    }
    
    .header {
        font-size: 14px;
    }
    
    @media (max-width: 768px) {
        .button {
            padding: 5px;
        }
    }
`;
const ast = post.parse(css);
