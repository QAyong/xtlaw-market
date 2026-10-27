# XTLaw 插件市场

XTLaw 的插件源码、市场目录和安装包发布入口。XTLaw 客户端从 `catalog/v1/index.json` 读取插件列表，从本仓库的 GitHub Releases 下载安装包，并按目录中登记的 SHA256 与大小校验后安装。客户端不会克隆本仓库，也不会执行这里的构建脚本。

## 目录结构

- `plugins/<name>/`：插件源码。目录里的 `market.json`（可选，`kind`、`source`）只登记目录元数据，不进安装包。清单 `extension.json` 中的 `id` 是插件的稳定身份，升级时保持不变。
- `catalog/v1/index.json`：市场目录，由构建脚本生成，不要手工编辑。
- `packs/<id>.json`：能力包。能力包只是对上面插件的引用清单（`includes` 填插件的清单 `id`），没有包体，不需要发布 Release；文件名必须等于包的 `id`。
- `catalog/v1/packs.json`：能力包目录，由构建脚本从 `packs/` 生成，不要手工编辑。单独成文件，是因为客户端的 `index.json` 校验很严，新增字段会让已发布的客户端整份拒绝。
- `scripts/build.mjs`：把 TypeScript 源码插件编译、已编译插件直接打包为 `.lexora-extension`，输出到 `dist/`，并重新生成市场目录。

## 发布流程

1. 修改插件源码，并提升清单中的 `version`。
2. 构建：

   ```bash
   pnpm install
   pnpm build
   ```

3. 创建名为 `<name>-v<version>` 的 GitHub Release，上传 `dist/<name>-<version>.lexora-extension`。
4. 提交并推送 `catalog/v1/index.json`（改了能力包时还有 `catalog/v1/packs.json`）。客户端刷新插件目录后即可看到新版本。

目录里的下载地址指向第 3 步的 Release，所以必须先上传安装包，再推送目录。

构建脚本使用与 XTLaw 内置编译器相同的 TypeScript 选项，并固定压缩包内的文件时间，同一份源码会生成相同的安装包和 SHA256。

## 兼容范围

清单中的 `engines.lexora` 按 XTLaw 的版本号填写，例如 `>=0.1.1 <1.0.0`。字段名沿用插件协议原有的命名。下限取该插件所需功能首次随 XTLaw 发布的版本：标题自动生成 1.3.0 需要 0.2.0（任务创建、回复开始等钩子），多 Shell 需要 0.3.1（多 Shell 配置）。

## 插件

| 插件 | 说明 | 来源 |
| --- | --- | --- |
| `auto-title` 标题自动生成 | 根据首条有效输入在后台生成任务标题，保留手动命名，可选随任务目标变化更新。 | 移植自 [useLexora/plugins](https://github.com/useLexora/plugins) 的 `auto-title` 1.3.0 |
| `multi-shell` 多 Shell · 命令执行 | 检测本机的 Bash、Git Bash、Zsh、sh、PowerShell 7+、Windows PowerShell 5.1 和 cmd，在设置中启用候选、指定路径、调整优先级。需要 XTLaw 0.3.1 或更新版本。 | 移植自 [useLexora/plugins](https://github.com/useLexora/plugins) 的 `multi-shell` 1.0.0 |
| `office` Office DOCX | 预览、编辑、保存 Word 文档，引用到聊天。 | 来自 [XTLaw](https://github.com/QAyong/XTLaw/tree/master/plugins/office)，保留原插件 ID 与许可证 |
| `office-pptx` Office PPTX | 预览、编辑、保存 PowerPoint 演示文稿，引用到聊天。 | 来自 [XTLaw](https://github.com/QAyong/XTLaw/tree/master/plugins/office-pptx)，保留原插件 ID 与许可证 |
| `office-xlsx` Office XLSX | 预览、编辑、保存 Excel 工作簿，引用到聊天。 | 来自 [XTLaw](https://github.com/QAyong/XTLaw/tree/master/plugins/office-xlsx)，保留原插件 ID 与许可证 |
| `legal-research` 法律检索（技能） | 中国大陆法律检索技能。由市场分发，需要在市场安装。 | XTLaw 自有 |
| `pkulaw` 北大法宝（MCP） | 内置 MCP 的登记，不携带内容，不能重复安装。 | XTLaw 自有 |
| `legal-research-agent` 法律检索员（子代理） | 只读 NPC 子代理，安装后加入“晓晓”的可委派列表。需要 XTLaw 0.3.2 或更新版本。 | XTLaw 自有 |

Office 插件不再随后续 XTLaw 安装包预装，由用户在插件市场按需安装。已有安装与配置不删除。安装时仍须审核所申请的文件写回等权限；XLSX 的 WebAssembly 按客户端的非内置插件限额验证。

## 能力包

| 能力包 | 包含 |
| --- | --- |
| `office` Office 文档 | `office`、`office-pptx`、`office-xlsx` |
| `legal-research` 法律检索 | `legal-research`、`pkulaw`、`legal-research-agent` |

## 许可证

市场构建脚本、标题插件和多 Shell 插件使用 [MIT 许可证](LICENSE)。Office 插件及其第三方依赖、字体等遵循各自目录中的 `LICENSE`、其他许可证文件及 `provenance.json`，不因迁入本仓库而改为 MIT；发布包完整保留这些文件。
