export var ComponentStateViewType = {
  LOADING: 1,
  CONTENT: 2,
  EMPTY: 3,
  BLOCKING: 4,
  ERROR: 5
};

export class ComponentStateView {
  errorView;
  loadingView;
  emptyView;
  blockingView;

  constructor(errorView, loadingView, emptyView, blockingView) {
    this.loadingView = loadingView;
    this.emptyView = emptyView;
    this.blockingView = blockingView;
    this.errorView = errorView;
  }

  component(type) {
    switch (type) {
      case ComponentStateViewType.CONTENT:
        return null;
      case ComponentStateViewType.LOADING:
        return this.loadingView;
      case ComponentStateViewType.EMPTY:
        return this.emptyView;
      case ComponentStateViewType.BLOCKING:
        return this.blockingView;
      case ComponentStateViewType.ERROR:
        return this.errorView;
    }
  }
}
