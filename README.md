# XTLaw 插件市场

XTLaw 的插件源码、市场目录和安装包发布入口。XTLaw 客户端从 `catalog/v1/index.json` 读取插件列表，从本仓库的 GitHub Releases 下载安装包，并按目录中登记的 SHA256 与大小校验后安装。客户端不会克隆本仓库，也不会执行这里的构建脚本。

## 目录结构

- `plugins/<name>/`：插件源码。清单 `extension.json` 中的 `id` 是插件的稳定身份，升级时保持不变。
- `catalog/v1/index.json`：市场目录，由构建脚本生成，不要手工编辑。
- `scripts/build.mjs`：把每个插件编译成 `.lexora-extension` 安装包，输出到 `dist/`，并重新生成市场目录。

## 发布流程

1. 修改插件源码，并提升清单中的 `version`。
2. 构建：

   ```bash
   pnpm install
   pnpm build
   ```

3. 创建名为 `<name>-v<version>` 的 GitHub Release，上传 `dist/<name>-<version>.lexora-extension`。
4. 提交并推送 `catalog/v1/index.json`。客户端刷新插件目录后即可看到新版本。

目录里的下载地址指向第 3 步的 Release，所以必须先上传安装包，再推送目录。

构建脚本使用与 XTLaw 内置编译器相同的 TypeScript 选项，并固定压缩包内的文件时间，同一份源码会生成相同的安装包和 SHA256。

## 兼容范围

清单中的 `engines.lexora` 按 XTLaw 的版本号填写，例如 `>=0.1.1 <1.0.0`。字段名沿用插件协议原有的命名。

## 插件

| 插件 | 说明 | 来源 |
| --- | --- | --- |
| `auto-title` 标题自动生成 | 根据首条有效输入在后台生成任务标题，保留手动命名，可选随任务目标变化更新。 | 移植自 [useLexora/plugins](https://github.com/useLexora/plugins) 的 `auto-title` 1.2.2 |

## 许可证

本仓库使用 [MIT 许可证](LICENSE)。移植自上游的插件保留原作者版权声明，安装包携带同一份许可证。
