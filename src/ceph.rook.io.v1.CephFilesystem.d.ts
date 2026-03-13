/** Generated from Remote JSON Schema for ceph.rook.io.v1.CephFilesystem */

/**
 * CephFilesystem represents a Ceph Filesystem
 */
export interface CephRookIoV1CephFilesystem {
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
   * FilesystemSpec represents the spec of a file system
   */
  spec: {
    /**
     * The data pool settings, with optional predefined pool name.
     */
    dataPools: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Name of the pool
       */
      name?: string;
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    /**
     * The metadata pool settings
     */
    metadataPool: {
      /**
       * The application name to set on the pool. Only expected to be set for rgw pools.
       */
      application?: string;
      /**
       * DEPRECATED: use Parameters instead, e.g., Parameters["compression_mode"] = "force"
       * The inline compression mode in Bluestore OSD to set to (options are: none, passive, aggressive, force)
       * Do NOT set a default value for kubebuilder as this will override the Parameters
       */
      compressionMode?: 'none' | 'passive' | 'aggressive' | 'force' | '';
      /**
       * The root of the crush hierarchy utilized by the pool
       */
      crushRoot?: string;
      /**
       * The device class the OSD should set to for use in the pool
       */
      deviceClass?: string;
      /**
       * Allow rook operator to change the pool CRUSH tunables once the pool is created
       */
      enableCrushUpdates?: boolean;
      /**
       * EnableRBDStats is used to enable gathering of statistics for all RBD images in the pool
       */
      enableRBDStats?: boolean;
      /**
       * The erasure code settings
       */
      erasureCoded?: {
        /**
         * The algorithm for erasure coding.
         * If absent, defaults to the plugin specified in osd_pool_default_erasure_code_profile.
         */
        algorithm?: 'isa' | 'jerasure';
        /**
         * Number of coding chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * This is the number of OSDs that can be lost simultaneously before data cannot be recovered.
         */
        codingChunks: number;
        /**
         * Number of data chunks per object in an erasure coded storage pool (required for erasure-coded pool type).
         * The number of chunks required to recover an object when any single OSD is lost is the same
         * as dataChunks so be aware that the larger the number of data chunks, the higher the cost of recovery.
         */
        dataChunks: number;
        [k: string]: unknown;
      };
      /**
       * The failure domain: osd/host/(region or zone if available) - technically also any type in the crush map
       */
      failureDomain?: string;
      /**
       * The mirroring settings
       */
      mirroring?: {
        /**
         * Enabled whether this pool is mirrored or not
         */
        enabled?: boolean;
        /**
         * Mode is the mirroring mode: pool, image or init-only.
         */
        mode?: 'pool' | 'image' | 'init-only';
        /**
         * Peers represents the peers spec
         */
        peers?: {
          /**
           * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
           */
          secretNames?: string[];
          [k: string]: unknown;
        };
        /**
         * SnapshotSchedules is the scheduling of snapshot for mirrored images/pools
         */
        snapshotSchedules?: {
          /**
           * Interval represent the periodicity of the snapshot.
           */
          interval?: string;
          /**
           * Path is the path to snapshot, only valid for CephFS
           */
          path?: string;
          /**
           * StartTime indicates when to start the snapshot
           */
          startTime?: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * Name of the pool
       */
      name?: string;
      /**
       * Parameters is a list of properties to enable on a given pool
       */
      parameters?: {
        [k: string]: string;
      };
      /**
       * The quota settings
       */
      quotas?: {
        /**
         * MaxBytes represents the quota in bytes
         * Deprecated in favor of MaxSize
         */
        maxBytes?: number;
        /**
         * MaxObjects represents the quota in objects
         */
        maxObjects?: number;
        /**
         * MaxSize represents the quota in bytes as a string
         */
        maxSize?: string;
        [k: string]: unknown;
      };
      /**
       * The replication settings
       */
      replicated?: {
        /**
         * HybridStorage represents hybrid storage tier settings
         */
        hybridStorage?: {
          /**
           * PrimaryDeviceClass represents high performance tier (for example SSD or NVME) for Primary OSD
           */
          primaryDeviceClass: string;
          /**
           * SecondaryDeviceClass represents low performance tier (for example HDDs) for remaining OSDs
           */
          secondaryDeviceClass: string;
          [k: string]: unknown;
        };
        /**
         * ReplicasPerFailureDomain the number of replica in the specified failure domain
         */
        replicasPerFailureDomain?: number;
        /**
         * RequireSafeReplicaSize if false allows you to set replica 1
         */
        requireSafeReplicaSize?: boolean;
        /**
         * Size - Number of copies per object in a replicated storage pool, including the object itself (required for replicated pool type)
         */
        size: number;
        /**
         * SubFailureDomain the name of the sub-failure domain
         */
        subFailureDomain?: string;
        /**
         * TargetSizeRatio gives a hint (%) to Ceph in terms of expected consumption of the total cluster capacity
         */
        targetSizeRatio?: number;
        [k: string]: unknown;
      };
      /**
       * The mirroring statusCheck
       */
      statusCheck?: {
        /**
         * HealthCheckSpec represents the health check of an object store bucket
         */
        mirror?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * The mds pod info
     */
    metadataServer: {
      /**
       * The number of metadata servers that are active. The remaining servers in the cluster will be in standby mode.
       */
      activeCount: number;
      /**
       * Whether each active MDS instance will have an active standby with a warm metadata cache for faster failover.
       * If false, standbys will still be available, but will not have a warm metadata cache.
       */
      activeStandby?: boolean;
      /**
       * The annotations-related configuration to add/set on each Pod related object.
       */
      annotations?: {
        [k: string]: string;
      };
      /**
       * CacheMemoryLimitFactor is the factor applied to the memory limit to determine the MDS cache memory limit.
       * MDS cache memory limit should be set to 50-60% of RAM reserved for the MDS container.
       * MDS uses approximately 125% of the value of mds_cache_memory_limit in RAM.
       * This factor is applied when resources.limits.memory is set.
       */
      cacheMemoryLimitFactor?: number;
      /**
       * CacheMemoryRequestFactor is the factor applied to the memory request to determine the MDS cache memory limit.
       * This factor is applied when resources.requests.memory is set and resources.limits.memory is not set.
       */
      cacheMemoryRequestFactor?: number;
      /**
       * The labels-related configuration to add/set on each Pod related object.
       */
      labels?: {
        [k: string]: string;
      };
      /**
       * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
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
       * PriorityClassName sets priority classes on components
       */
      priorityClassName?: string;
      /**
       * The resource requirements for the mds pods
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
      /**
       * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
       */
      startupProbe?: {
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
      [k: string]: unknown;
    };
    /**
     * The mirroring settings
     */
    mirroring?: {
      /**
       * Enabled whether this filesystem is mirrored or not
       */
      enabled?: boolean;
      /**
       * Peers represents the peers spec
       */
      peers?: {
        /**
         * SecretNames represents the Kubernetes Secret names to add rbd-mirror or cephfs-mirror peers
         */
        secretNames?: string[];
        [k: string]: unknown;
      };
      /**
       * Retention is the retention policy for a snapshot schedule
       * One path has exactly one retention policy.
       * A policy can however contain multiple count-time period pairs in order to specify complex retention policies
       */
      snapshotRetention?: {
        /**
         * Duration represents the retention duration for a snapshot
         */
        duration?: string;
        /**
         * Path is the path to snapshot
         */
        path?: string;
        [k: string]: unknown;
      }[];
      /**
       * SnapshotSchedules is the scheduling of snapshot for mirrored filesystems
       */
      snapshotSchedules?: {
        /**
         * Interval represent the periodicity of the snapshot.
         */
        interval?: string;
        /**
         * Path is the path to snapshot, only valid for CephFS
         */
        path?: string;
        /**
         * StartTime indicates when to start the snapshot
         */
        startTime?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Preserve the fs in the cluster on CephFilesystem CR deletion. Setting this to true automatically implies PreservePoolsOnDelete is true.
     */
    preserveFilesystemOnDelete?: boolean;
    /**
     * Preserve pool names as specified
     */
    preservePoolNames?: boolean;
    /**
     * Preserve pools on filesystem deletion
     */
    preservePoolsOnDelete?: boolean;
    /**
     * The mirroring statusCheck
     */
    statusCheck?: {
      /**
       * HealthCheckSpec represents the health check of an object store bucket
       */
      mirror?: {
        disabled?: boolean;
        /**
         * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
         */
        interval?: string;
        timeout?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * CephFilesystemStatus represents the status of a Ceph Filesystem
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
     * Use only info and put mirroringStatus in it?
     */
    info?: {
      [k: string]: string;
    };
    /**
     * MirroringStatus is the filesystem mirroring status
     */
    mirroringStatus?: {
      /**
       * PoolMirroringStatus is the mirroring status of a filesystem
       */
      daemonsStatus?: {
        /**
         * DaemonID is the cephfs-mirror name
         */
        daemon_id?: number;
        /**
         * Filesystems is the list of filesystems managed by a given cephfs-mirror daemon
         */
        filesystems?: {
          /**
           * DirectoryCount is the number of directories in the filesystem
           */
          directory_count?: number;
          /**
           * FilesystemID is the filesystem identifier
           */
          filesystem_id?: number;
          /**
           * Name is name of the filesystem
           */
          name?: string;
          /**
           * Peers represents the mirroring peers
           */
          peers?: {
            /**
             * Remote are the remote cluster information
             */
            remote?: {
              /**
               * ClientName is cephx name
               */
              client_name?: string;
              /**
               * ClusterName is the name of the cluster
               */
              cluster_name?: string;
              /**
               * FsName is the filesystem name
               */
              fs_name?: string;
              [k: string]: unknown;
            };
            /**
             * Stats are the stat a peer mirror
             */
            stats?: {
              /**
               * FailureCount is the number of mirroring failure
               */
              failure_count?: number;
              /**
               * RecoveryCount is the number of recovery attempted after failures
               */
              recovery_count?: number;
              [k: string]: unknown;
            };
            /**
             * UUID is the peer unique identifier
             */
            uuid?: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      /**
       * Details contains potential status errors
       */
      details?: string;
      /**
       * LastChanged is the last time time the status last changed
       */
      lastChanged?: string;
      /**
       * LastChecked is the last time time the status was checked
       */
      lastChecked?: string;
      [k: string]: unknown;
    };
    /**
     * ObservedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * ConditionType represent a resource's status
     */
    phase?: string;
    /**
     * FilesystemSnapshotScheduleStatusSpec is the status of the snapshot schedule
     */
    snapshotScheduleStatus?: {
      /**
       * Details contains potential status errors
       */
      details?: string;
      /**
       * LastChanged is the last time time the status last changed
       */
      lastChanged?: string;
      /**
       * LastChecked is the last time time the status was checked
       */
      lastChecked?: string;
      /**
       * SnapshotSchedules is the list of snapshots scheduled
       */
      snapshotSchedules?: {
        /**
         * Fs is the name of the Ceph Filesystem
         */
        fs?: string;
        /**
         * Path is the path on the filesystem
         */
        path?: string;
        rel_path?: string;
        /**
         * FilesystemSnapshotScheduleStatusRetention is the retention specification for a filesystem snapshot schedule
         */
        retention?: {
          /**
           * Active is whether the scheduled is active or not
           */
          active?: boolean;
          /**
           * Created is when the snapshot schedule was created
           */
          created?: string;
          /**
           * CreatedCount is total amount of snapshots
           */
          created_count?: number;
          /**
           * First is when the first snapshot schedule was taken
           */
          first?: string;
          /**
           * Last is when the last snapshot schedule was taken
           */
          last?: string;
          /**
           * LastPruned is when the last snapshot schedule was pruned
           */
          last_pruned?: string;
          /**
           * PrunedCount is total amount of pruned snapshots
           */
          pruned_count?: number;
          /**
           * Start is when the snapshot schedule starts
           */
          start?: string;
          [k: string]: unknown;
        };
        schedule?: string;
        /**
         * Subvol is the name of the sub volume
         */
        subvol?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
