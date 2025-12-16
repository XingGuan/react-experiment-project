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
// 找到规则: .button
//   属性: color = blue
//   属性: padding = 10px
// 找到规则: .header
//   属性: font-size = 14px
// 找到规则: .button
//   属性: padding = 5px
export {};
// 插件 在插件开发中的使用
const plugin = postcss.plugin("my-plugin", () => {
  return (root: any, result: any) => {
    root.walkRules((rule: any) => {
      // 插件逻辑
      if (rule.selector === ".old-class") {
        rule.selector = ".new-class";
      }
    });
  };
});
