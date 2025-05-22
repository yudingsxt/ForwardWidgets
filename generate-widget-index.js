const fs = require('fs');
const path = require('path');

// 配置目录路径
const WIDGETS_DIR = './widgets'; // 调整为你的小部件目录路径
const OUTPUT_FILE = './ForwardWidgets.fwd';

// 创建临时目录来存放预处理的文件
const TEMP_DIR = path.join(__dirname, 'temp_widgets');
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// 通过创建一个临时文件来提取WidgetMetadata
function extractWidgetMetadata(filePath) {
  try {
    const fileName = path.basename(filePath);
    const tempFilePath = path.join(TEMP_DIR, fileName);
    
    // 读取原始文件内容
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 创建一个临时模块，将WidgetMetadata暴露为模块导出
    const wrappedContent = `
      let exportedMetadata;
      
      // 捕获WidgetMetadata对象
      global.WidgetMetadata = function(metadata) {
        exportedMetadata = metadata;
        return metadata;
      };
      
      // 如果是赋值形式，例如 WidgetMetadata = {...}
      Object.defineProperty(global, 'WidgetMetadata', {
        set: function(value) {
          exportedMetadata = value;
        },
        get: function() {
          return function(metadata) {
            exportedMetadata = metadata;
            return metadata;
          }
        }
      });
      
      // 执行原始小部件代码
      ${content}
      
      module.exports = exportedMetadata;
    `;
    
    // 写入临时文件
    fs.writeFileSync(tempFilePath, wrappedContent);
    
    // 尝试导入临时模块
    const modulePath = require.resolve(tempFilePath);
    const metadata = require(modulePath);
    
    // 清除缓存，这样如果再次运行时代码已更改，我们会得到新的结果
    delete require.cache[modulePath];
    
    if (!metadata) {
      console.warn(`在文件 ${filePath} 中未找到WidgetMetadata`);
      return null;
    }
    
    // 提取所需字段
    const { id, title, description, requiredVersion, version, author } = metadata;
    
    const url = `https://raw.githubusercontent.com/quantumultxx/FW-Widgets/refs/heads/main/widgets/${fileName}`

    return { id, title, description, requiredVersion, version, author, url };
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
    return null;
  }
}

async function main() {
  try {
    // 确保widgets目录存在
    if (!fs.existsSync(WIDGETS_DIR)) {
      console.error(`目录 ${WIDGETS_DIR} 不存在`);
      process.exit(1);
    }

    // 获取widgets目录中的所有JS文件
    const files = fs.readdirSync(WIDGETS_DIR)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(WIDGETS_DIR, file));
      
    console.log(`找到 ${files.length} 个JS文件需要处理`);
    
    // 处理每个文件并提取元数据
    const widgetIndex = files.map(extractWidgetMetadata).filter(Boolean);
    const metadata = {
      title: '𝓑𝓾𝓽𝓽𝓮𝓻𝓯𝓵𝔂's 𝓦𝓲𝓭𝓰𝓮𝓽𝓼',
      description: '汇集豆瓣、TMDB、IMDB、猫眼和Bangumi的各类榜单',
      icon: 'https://raw.githubusercontent.com/quantumultxx/FW-Widgets/refs/heads/main/icon.png',
      widgets: widgetIndex
    }
    
    console.log(`成功从 ${widgetIndex.length} 个小部件中提取元数据`);
    
    // 写入索引文件
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(metadata, null, 2));
    
    console.log(`小部件索引已写入 ${OUTPUT_FILE}`);
  } finally {
    // 清理临时目录
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
  }
}

main().catch(error => {
  console.error('生成小部件索引时出错:', error);
  process.exit(1);
});