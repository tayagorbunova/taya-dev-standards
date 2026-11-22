const TOOL_DIRECTIVE = /^\s*(@ts-|prettier-ignore\b)|^\/\s*<reference\b/;

function isShebang(comment) {
  return comment.type === "Shebang" || (comment.range[0] === 0 && comment.value.startsWith("!"));
}

export const noComments = {
  meta: {
    type: "suggestion",
    docs: { description: "Disallow code comments, except tool directives" },
    messages: {
      comment:
        "Don't write code comments. Record a decision the code can't show in DECISIONS.md, and a workaround in docs/todo.md.",
    },
    schema: [],
  },

  create(context) {
    const { sourceCode } = context;

    return {
      Program() {
        const directives = new Set(sourceCode.getInlineConfigNodes());

        for (const comment of sourceCode.getAllComments()) {
          if (
            !directives.has(comment) &&
            !isShebang(comment) &&
            !TOOL_DIRECTIVE.test(comment.value)
          ) {
            context.report({ loc: comment.loc, messageId: "comment" });
          }
        }
      },
    };
  },
};
