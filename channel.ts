import * as t from './tutils'

/**
 * Minimal info required to connect to a node.
 */
type MinNodeInfo = t.r<{
  /**
   * i-dos will attempt to connect to the same address (logically?) for both
   * BitTorrent and Lightning.
   */
  ip: string
  /**
   * The node's Lightning public key.
   */
  publicKey: string
}>

type NodeStatus = 'ok' | 'err'

type Node = MinNodeInfo &
  t.r<{
    status: NodeStatus
  }>

export { MinNodeInfo, NodeStatus, Node }
