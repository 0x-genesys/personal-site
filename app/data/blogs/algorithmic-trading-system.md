# Algorithmic Trading System with Neural Networks

Capturing momentum breakouts in low SNR environments

## Overview

I built an end-to-end algorithmic trading system that achieved +172.81% compound return in Walk-Forward testing. Here's how I combined LSTMs with a dynamic risk shield to capture momentum breakouts.

## System Architecture

The trading system consists of three main components:

1. **Signal Generation**: LSTM-based model predicting price movements
2. **Risk Management**: Dynamic position sizing based on volatility
3. **Execution Engine**: Order routing to multiple exchanges

## Signal Generation

The LSTM model takes in multiple features:

- Price returns (1m, 5m, 15m timeframes)
- Volume imbalances
- Order book features
- Technical indicators (RSI, MACD, Bollinger Bands)

### Feature Engineering

```python
# Key features used
features = [
    'return_1m', 'return_5m', 'return_15m',
    'volume_imbalance', 'order_book_slope',
    'rsi_14', 'macd_signal', 'bb_position'
]
```

## Risk Management

The dynamic risk shield adjusts position size based on market conditions:

- **Low Volatility**: Standard position sizing
- **High Volatility**: Reduced position size
- **Extreme Volatility**: No trading

## Backtesting Results

| Metric | Value |
|--|---|
| Total Return | +172.81% |
| Sharpe Ratio | 1.85 |
| Max Drawdown | -12.4% |
| Win Rate | 58.3% |

## Live Performance

Since going live in January 2026, the system has consistently outperformed benchmarks with lower volatility.

## Conclusion

Combining neural networks with robust risk management creates a powerful trading system. The key was focusing on low SNR environments where traditional strategies struggle.
