# 第2章 Angular2的核心概念详解

## 2-1 组件及组件树

### 8个核心概念

- 组件 Components
- 元数据 Metadata
- 模板 Templates
- 数据绑定 Data binding
- 服务 Services
- 指令 Directives
- 依赖注入 Dependency Injection
- 模块 Modules

### 组件

**组件要素**

HTML、CSS、JavaScript

### 全生命周期支持

- Constructor 构造器初始化
- OnChanges 第一次触发数据变化钩子
- OnInit 组件初始化（建议将和业务相关的初始化放到这里）
- OnChanges 运行期间触发数据变化钩子
- OnDestroy 组件销毁前

### 组件示例

```
// 装饰器
@Component({
    selector: 'hello',
    template: '<p>{{greeting}}</p>'
})
// 组件类
export class HelloComponent {
    private greeting: string;
    constructor() {
        this.greeting = 'Hello, Angular 2!'
    }
}
```

### 元数据与装饰器

普通类 + 装饰器(@Component，包含元数据) => 组件

装饰器用于赋予一个类更丰富的信息（元数据），可以学习“reflect-metadata”库。

### 模板

- 内联模板：template
- 外联模板：templateUrl

### 数据绑定

**数据绑定方式**

- 插值：{{interpolation}}
- 属性绑定：[value]

```
<input [value]="myData" />
```

- 事件绑定：(keyup)

```
<input (keyup)="handle($event)" />
```

- 双向绑定：[(ngModel)]

```
<input [(ngModel)]="myData" />
```

### 组件树

### 组件渲染

## 2-2 指令

## 2-3 服务与依赖注入

服务是实现专一目的的逻辑单元， 如：日志服务。

示例：

```
export class LoggerService {
    constructor() {}

    debug(msg: string) {
        console.log(msg);
    }

    error(msg: string) {
        console.error(msg);
    }
}
```

### 依赖注入

依赖注入是组件引入外部构建（如：服务）的一种机制。


```
// 装饰器
@Component({
    selector: 'hello',
    template: '<p>{{greeting}}</p>',
    providers: [LoggerService]
})
// 组件类
export class HelloComponent {
    private greeting: string;
    constructor(logger: LoggerService) {
        this.greeting = 'Hello, Angular 2!';
        logger.debug('构造函数执行完毕');
    }
}
```

**分层注入**

注入 -> 重新注入

## 2-4 模块

模块由组件、指令、服务组成。

### 文件模块

- 核心模块：@angular/core
- 通用模块：@angular/common
- 表单模块：@angular/forms
- 网络模块：@angular/http

**文件模块使用示例**

```
import { http } from "@angular/http"

// @Component装饰器
import { Component } from "@angular/core"

// @Directive装饰器
import { Directive } from "@angular/core"

import { ElementRef, Renderer} from "@angular/core"
```

### 应用模块

```
@NgModule({
    declarations: [
        AppComponent,
        SomeDirective
    ],
    providers: [ LoggerService ],
    imports: [ OtherModule ],
    bootstrap: [ AppComponent ],
    exports: [ SomeDirective ]
})
export class AppModule {}
```

- declarations: 包装组件或指令等
- providers: 依赖注入
- imports: 导入其他模块
- bootstrap: 设置根组件
- exports: 导出组件或指令等
