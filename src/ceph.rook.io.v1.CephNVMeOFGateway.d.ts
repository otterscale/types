/** Generated from Remote JSON Schema for ceph.rook.io.v1.CephNVMeOFGateway */

/**
 * CephNVMeOFGateway represents a Ceph NVMe-oF Gateway
 */
export interface CephRookIoV1CephNVMeOFGateway {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * NVMeOFGatewaySpec represents the spec of an NVMe-oF gateway
   */
  spec: {
    /**
     * The annotations-related configuration to add/set on each Pod related object.
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * ConfigMapRef is the name of the ConfigMap containing nvmeof.conf configuration
     * If not specified, a default configuration will be generated
     */
    configMapRef?: string;
    /**
     * Group is the gateway group name for high availability (ANA group)
     */
    group: string;
    /**
     * Whether host networking is enabled for the gateway. If not set, the network settings from the cluster CR will be applied.
     */
    hostNetwork?: boolean;
    /**
     * Image is the container image to use for the NVMe-oF gateway daemon.
     * For example, quay.io/ceph/nvmeof:1.5
     */
    image: string;
    /**
     * The number of active gateway instances
     */
    instances: number;
    /**
     * The labels-related configuration to add/set on each Pod related object.
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * A liveness-probe to verify that gateway has valid run-time state.
     * If LivenessProbe.Disabled is false and LivenessProbe.Probe is nil uses default probe.
     */
    livenessProbe?: {
      /**
       * Disabled determines whether probe is disable or not
       */
      disabled?: boolean;
      /**
       * Probe describes a health check to be performed against a container to determine whether it is
       * alive or ready to receive traffic.
       */
      probe?: {
        /**
         * Exec specifies a command to execute in the container.
         */
        exec?: {
          /**
           * Command is the command line to execute inside the container, the working directory for the
           * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
           * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
           * a shell, you need to explicitly call out to that shell.
           * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
           */
          command?: string[];
          [k: string]: unknown;
        };
        /**
         * Minimum consecutive failures for the probe to be considered failed after having succeeded.
         * Defaults to 3. Minimum value is 1.
         */
        failureThreshold?: number;
        /**
         * GRPC specifies a GRPC HealthCheckRequest.
         */
        grpc?: {
          /**
           * Port number of the gRPC service. Number must be in the range 1 to 65535.
           */
          port: number;
          /**
           * Service is the name of the service to place in the gRPC HealthCheckRequest
           * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
           *
           * If this is not specified, the default behavior is defined by gRPC.
           */
          service?: string;
          [k: string]: unknown;
        };
        /**
         * HTTPGet specifies an HTTP GET request to perform.
         */
        httpGet?: {
          /**
           * Host name to connect to, defaults to the pod IP. You probably want to set
           * "Host" in httpHeaders instead.
           */
          host?: string;
          /**
           * Custom headers to set in the request. HTTP allows repeated headers.
           */
          httpHeaders?: {
            /**
             * The header field name.
             * This will be canonicalized upon output, so case-variant names will be understood as the same header.
             */
            name: string;
            /**
             * The header field value
             */
            value: string;
            [k: string]: unknown;
          }[];
          /**
           * Path to access on the HTTP server.
           */
          path?: string;
          /**
           * Name or number of the port to access on the container.
           * Number must be in the range 1 to 65535.
           * Name must be an IANA_SVC_NAME.
           */
          port: number | string;
          /**
           * Scheme to use for connecting to the host.
           * Defaults to HTTP.
           */
          scheme?: string;
          [k: string]: unknown;
        };
        /**
         * Number of seconds after the container has started before liveness probes are initiated.
         * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        initialDelaySeconds?: number;
        /**
         * How often (in seconds) to perform the probe.
         * Default to 10 seconds. Minimum value is 1.
         */
        periodSeconds?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful after having failed.
         * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
         */
        successThreshold?: number;
        /**
         * TCPSocket specifies a connection to a TCP port.
         */
        tcpSocket?: {
          /**
           * Optional: Host name to connect to, defaults to the pod IP.
           */
          host?: string;
          /**
           * Number or name of the port to access on the container.
           * Number must be in the range 1 to 65535.
           * Name must be an IANA_SVC_NAME.
           */
          port: number | string;
          [k: string]: unknown;
        };
        terminationGracePeriodSeconds?: number;
        /**
         * Number of seconds after which the probe times out.
         * Defaults to 1 second. Minimum value is 1.
         * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         */
        timeoutSeconds?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * NVMeOFConfig is a map of section names to key-value pairs for nvmeof.conf configuration
     * This allows users to override or add configuration options without needing to manage a ConfigMap
     */
    nvmeofConfig?: {
      [k: string]: {
        [k: string]: string;
      };
    };
    placement?: {
      nodeAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          preference: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchFields?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          };
          weight: number;
          [k: string]: unknown;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          nodeSelectorTerms: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchFields?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      podAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          podAffinityTerm: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          };
          weight: number;
          [k: string]: unknown;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          matchLabelKeys?: string[];
          mismatchLabelKeys?: string[];
          namespaceSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          namespaces?: string[];
          topologyKey: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      podAntiAffinity?: {
        preferredDuringSchedulingIgnoredDuringExecution?: {
          podAffinityTerm: {
            labelSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            matchLabelKeys?: string[];
            mismatchLabelKeys?: string[];
            namespaceSelector?: {
              matchExpressions?: {
                key: string;
                operator: string;
                values?: string[];
                [k: string]: unknown;
              }[];
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            namespaces?: string[];
            topologyKey: string;
            [k: string]: unknown;
          };
          weight: number;
          [k: string]: unknown;
        }[];
        requiredDuringSchedulingIgnoredDuringExecution?: {
          labelSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          matchLabelKeys?: string[];
          mismatchLabelKeys?: string[];
          namespaceSelector?: {
            matchExpressions?: {
              key: string;
              operator: string;
              values?: string[];
              [k: string]: unknown;
            }[];
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          namespaces?: string[];
          topologyKey: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      tolerations?: {
        effect?: string;
        key?: string;
        operator?: string;
        tolerationSeconds?: number;
        value?: string;
        [k: string]: unknown;
      }[];
      topologySpreadConstraints?: {
        labelSelector?: {
          matchExpressions?: {
            key: string;
            operator: string;
            values?: string[];
            [k: string]: unknown;
          }[];
          matchLabels?: {
            [k: string]: string;
          };
          [k: string]: unknown;
        };
        matchLabelKeys?: string[];
        maxSkew: number;
        minDomains?: number;
        nodeAffinityPolicy?: string;
        nodeTaintsPolicy?: string;
        topologyKey: string;
        whenUnsatisfiable: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Pool is the RADOS pool where NVMe-oF configuration is stored
     */
    pool: string;
    /**
     * Ports configuration for the NVMe-oF gateway
     */
    ports?: {
      /**
       * DiscoveryPort is the port for discovery service (default: 8009)
       */
      discoveryPort?: number;
      /**
       * GatewayPort is the port for the gateway service (default: 5500)
       */
      gatewayPort?: number;
      /**
       * IOPort is the port for NVMe-oF IO traffic (default: 4420)
       */
      ioPort?: number;
      /**
       * MonitorPort is the port for the monitor service (default: 5499)
       */
      monitorPort?: number;
      [k: string]: unknown;
    };
    /**
     * PriorityClassName sets the priority class on the pods
     */
    priorityClassName?: string;
    /**
     * Resources set resource requests and limits
     */
    resources?: {
      /**
       * Claims lists the names of resources, defined in spec.resourceClaims,
       * that are used by this container.
       *
       * This field depends on the
       * DynamicResourceAllocation feature gate.
       *
       * This field is immutable. It can only be set for containers.
       */
      claims?: {
        /**
         * Name must match the name of one entry in pod.spec.resourceClaims of
         * the Pod where this field is used. It makes that resource available
         * inside a container.
         */
        name: string;
        /**
         * Request is the name chosen for a request in the referenced claim.
         * If empty, everything from the claim is made available, otherwise
         * only the result of this request.
         */
        request?: string;
        [k: string]: unknown;
      }[];
      /**
       * Limits describes the maximum amount of compute resources allowed.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      limits?: {
        [k: string]: number | string;
      };
      /**
       * Requests describes the minimum amount of compute resources required.
       * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
       * otherwise to an implementation-defined value. Requests cannot exceed Limits.
       * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
       */
      requests?: {
        [k: string]: number | string;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * NVMeOFGatewayStatus represents the status of Ceph NVMe-oF Gateway
   */
  status?: {
    cephx?: {
      /**
       * Daemon shows the CephX key status for local Ceph daemons associated with this resources.
       */
      daemon?: {
        /**
         * KeyCephVersion reports the Ceph version that created the current generation's keys. This is
         * same string format as reported by `CephCluster.status.version.version` to allow them to be
         * compared. E.g., `20.2.0-0`.
         * For all newly-created resources, this field set to the version of Ceph that created the key.
         * The special value "Uninitialized" indicates that keys are being created for the first time.
         * An empty string indicates that the version is unknown, as expected in brownfield deployments.
         */
        keyCephVersion?: string;
        /**
         * KeyGeneration represents the CephX key generation for the last successful reconcile.
         * For all newly-created resources, this field is set to `1`.
         * When keys are rotated due to any rotation policy, the generation is incremented or updated to
         * the configured policy generation.
         * Generation `0` indicates that keys existed prior to the implementation of key tracking.
         */
        keyGeneration?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    conditions?: {
      lastHeartbeatTime?: string;
      lastTransitionTime?: string;
      message?: string;
      /**
       * ConditionReason is a reason for a condition
       */
      reason?: string;
      status?: string;
      /**
       * ConditionType represent a resource's status
       */
      type?: string;
      [k: string]: unknown;
    }[];
    /**
     * ObservedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    phase?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
