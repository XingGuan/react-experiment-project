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
// 遍历多有规则
ast.walkRules((rule: any) => {
  console.log(`找到规则:${rule.selector}`);
  rule.walkDecls((decl: any) => {
    console.log(`属性：${decl.prop} = ${decl.value}`);
  });
});
// 输出：

export {};
