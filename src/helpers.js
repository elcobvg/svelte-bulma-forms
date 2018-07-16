import uuid from 'random-uuid-v4'

export const id = name => name ? `${name.toLowerCase()}-${uuid()}` : uuid()

export const stateClass = state => state ? ` is-${state}` : ''

export const sizeClass = size => size ? ` is-${size}` : ''

export const expandClass = expanded => expanded ? ` is-expanded` : ''
