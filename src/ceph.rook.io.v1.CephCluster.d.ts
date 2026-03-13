/** Generated from Remote JSON Schema for ceph.rook.io.v1.CephCluster */

/**
 * CephCluster is a Ceph storage cluster
 */
export interface CephRookIoV1CephCluster {
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
   * ClusterSpec represents the specification of Ceph Cluster
   */
  spec: {
    /**
     * The annotations-related configuration to add/set on each Pod related object.
     */
    annotations?: {
      /**
       * Annotations are annotations
       */
      [k: string]: {
        [k: string]: string;
      };
    };
    /**
     * Ceph Config options
     */
    cephConfig?: {
      [k: string]: {
        [k: string]: string;
      };
    };
    /**
     * CephConfigFromSecret works exactly like CephConfig but takes config value from Secret Key reference.
     */
    cephConfigFromSecret?: {
      [k: string]: {
        /**
         * SecretKeySelector selects a key of a Secret.
         */
        [k: string]: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          key: string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          name?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          optional?: boolean;
          [k: string]: unknown;
        };
      };
    };
    /**
     * The version information that instructs Rook to orchestrate a particular version of Ceph.
     */
    cephVersion?: {
      /**
       * Whether to allow unsupported versions (do not set to true in production)
       */
      allowUnsupported?: boolean;
      /**
       * Image is the container image used to launch the ceph daemons, such as quay.io/ceph/ceph:<tag>
       * The full list of images can be found at https://quay.io/repository/ceph/ceph?tab=tags
       */
      image?: string;
      /**
       * ImagePullPolicy describes a policy for if/when to pull a container image
       * One of Always, Never, IfNotPresent.
       */
      imagePullPolicy?: 'IfNotPresent' | 'Always' | 'Never' | '';
      [k: string]: unknown;
    };
    /**
     * Indicates user intent when deleting a cluster; blocks orchestration and should not be set if cluster
     * deletion is not imminent.
     */
    cleanupPolicy?: {
      /**
       * AllowUninstallWithVolumes defines whether we can proceed with the uninstall if they are RBD images still present
       */
      allowUninstallWithVolumes?: boolean;
      /**
       * Confirmation represents the cleanup confirmation
       */
      confirmation?: string;
      /**
       * SanitizeDisks represents way we sanitize disks
       */
      sanitizeDisks?: {
        /**
         * DataSource is the data source to use to sanitize the disk with
         */
        dataSource?: 'zero' | 'random';
        /**
         * Iteration is the number of pass to apply the sanitizing
         */
        iteration?: number;
        /**
         * Method is the method we use to sanitize disks
         */
        method?: 'complete' | 'quick';
        [k: string]: unknown;
      };
      /**
       * WipeDevicesFromOtherClusters wipes the OSD disks belonging to other clusters. This is useful in scenarios where ceph cluster
       * was reinstalled but OSD disk still contains the metadata from previous ceph cluster.
       */
      wipeDevicesFromOtherClusters?: boolean;
      [k: string]: unknown;
    };
    /**
     * ContinueUpgradeAfterChecksEvenIfNotHealthy defines if an upgrade should continue even if PGs are not clean
     */
    continueUpgradeAfterChecksEvenIfNotHealthy?: boolean;
    /**
     * A spec for the crash controller
     */
    crashCollector?: {
      /**
       * DaysToRetain represents the number of days to retain crash until they get pruned
       */
      daysToRetain?: number;
      /**
       * Disable determines whether we should enable the crash collector
       */
      disable?: boolean;
      [k: string]: unknown;
    };
    /**
     * CSI Driver Options applied per cluster.
     */
    csi?: {
      /**
       * CephFS defines CSI Driver settings for CephFS driver.
       */
      cephfs?: {
        /**
         * FuseMountOptions defines the mount options for ceph fuse mounter.
         */
        fuseMountOptions?: string;
        /**
         * KernelMountOptions defines the mount options for kernel mounter.
         */
        kernelMountOptions?: string;
        [k: string]: unknown;
      };
      /**
       * ReadAffinity defines the read affinity settings for CSI driver.
       */
      readAffinity?: {
        /**
         * CrushLocationLabels defines which node labels to use
         * as CRUSH location. This should correspond to the values set in
         * the CRUSH map.
         */
        crushLocationLabels?: string[];
        /**
         * Enables read affinity for CSI driver.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * SkipUserCreation determines whether CSI users and their associated secrets should be skipped.
       * If set to true, the user must manually manage these secrets.
       */
      skipUserCreation?: boolean;
      [k: string]: unknown;
    };
    /**
     * Dashboard settings
     */
    dashboard?: {
      /**
       * Enabled determines whether to enable the dashboard
       */
      enabled?: boolean;
      /**
       * Port is the dashboard webserver port
       */
      port?: number;
      /**
       * Endpoint for the Prometheus host
       */
      prometheusEndpoint?: string;
      /**
       * Whether to verify the ssl endpoint for prometheus. Set to false for a self-signed cert.
       */
      prometheusEndpointSSLVerify?: boolean;
      /**
       * SSL determines whether SSL should be used
       */
      ssl?: boolean;
      /**
       * URLPrefix is a prefix for all URLs to use the dashboard with a reverse proxy
       */
      urlPrefix?: string;
      [k: string]: unknown;
    };
    /**
     * The path on the host where config and data can be persisted
     */
    dataDirHostPath?: string;
    /**
     * A spec for configuring disruption management.
     */
    disruptionManagement?: {
      /**
       * Deprecated. Namespace to look for MDBs by the machineDisruptionBudgetController
       */
      machineDisruptionBudgetNamespace?: string;
      /**
       * Deprecated. This enables management of machinedisruptionbudgets.
       */
      manageMachineDisruptionBudgets?: boolean;
      /**
       * This enables management of poddisruptionbudgets
       */
      managePodBudgets?: boolean;
      /**
       * OSDMaintenanceTimeout sets how many additional minutes the DOWN/OUT interval is for drained failure domains
       * it only works if managePodBudgets is true.
       * the default is 30 minutes
       */
      osdMaintenanceTimeout?: number;
      /**
       * DEPRECATED: PGHealthCheckTimeout is no longer implemented
       */
      pgHealthCheckTimeout?: number;
      /**
       * PgHealthyRegex is the regular expression that is used to determine which PG states should be considered healthy.
       * The default is `^(active\+clean|active\+clean\+scrubbing|active\+clean\+scrubbing\+deep)$`
       */
      pgHealthyRegex?: string;
      [k: string]: unknown;
    };
    /**
     * Whether the Ceph Cluster is running external to this Kubernetes cluster
     * mon, mgr, osd, mds, and discover daemons will not be created for external clusters.
     */
    external?: {
      /**
       * Enable determines whether external mode is enabled or not
       */
      enable?: boolean;
      [k: string]: unknown;
    };
    /**
     * Internal daemon healthchecks and liveness probe
     */
    healthCheck?: {
      /**
       * DaemonHealth is the health check for a given daemon
       */
      daemonHealth?: {
        /**
         * Monitor represents the health check settings for the Ceph monitor
         */
        mon?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        /**
         * ObjectStorageDaemon represents the health check settings for the Ceph OSDs
         */
        osd?: {
          disabled?: boolean;
          /**
           * Interval is the internal in second or minute for the health check to run like 60s for 60 seconds
           */
          interval?: string;
          timeout?: string;
          [k: string]: unknown;
        };
        /**
         * Status represents the health check settings for the Ceph health
         */
        status?: {
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
      /**
       * LivenessProbe allows changing the livenessProbe configuration for a given daemon
       */
      livenessProbe?: {
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        [k: string]: {
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
      };
      /**
       * StartupProbe allows changing the startupProbe configuration for a given daemon
       */
      startupProbe?: {
        /**
         * ProbeSpec is a wrapper around Probe so it can be enabled or disabled for a Ceph daemon
         */
        [k: string]: {
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
      };
      [k: string]: unknown;
    };
    /**
     * The labels-related configuration to add/set on each Pod related object.
     */
    labels?: {
      /**
       * Labels are label for a given daemons
       */
      [k: string]: {
        [k: string]: string;
      };
    };
    /**
     * Logging represents loggings settings
     */
    logCollector?: {
      /**
       * Enabled represents whether the log collector is enabled
       */
      enabled?: boolean;
      /**
       * MaxLogSize is the maximum size of the log per ceph daemons. Must be at least 1M.
       */
      maxLogSize?: number | string;
      /**
       * Periodicity is the periodicity of the log rotation.
       */
      periodicity?: string;
      [k: string]: unknown;
    };
    /**
     * A spec for mgr related options
     */
    mgr?: {
      /**
       * AllowMultiplePerNode allows to run multiple managers on the same node (not recommended)
       */
      allowMultiplePerNode?: boolean;
      /**
       * Count is the number of manager daemons to run
       */
      count?: number;
      /**
       * Whether host networking is enabled for the Ceph Mgr. If not set, the network settings from CephCluster.spec.networking will be applied.
       */
      hostNetwork?: boolean;
      /**
       * Modules is the list of ceph manager modules to enable/disable
       */
      modules?: {
        /**
         * Enabled determines whether a module should be enabled or not
         */
        enabled?: boolean;
        /**
         * Name is the name of the ceph manager module
         */
        name?: string;
        /**
         * Settings to further configure the module
         */
        settings?: {
          /**
           * BalancerMode sets the `balancer` module with different modes like `upmap`, `crush-compact` etc
           */
          balancerMode?: '' | 'crush-compat' | 'upmap' | 'read' | 'upmap-read';
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * A spec for mon related options
     */
    mon?: {
      /**
       * AllowMultiplePerNode determines if we can run multiple monitors on the same node (not recommended)
       */
      allowMultiplePerNode?: boolean;
      /**
       * Count is the number of Ceph monitors
       */
      count?: number;
      /**
       * ExternalMonIDs - optional list of monitor IDs which are deployed externally and not managed by Rook.
       * If set, Rook will not remove mons with given IDs from quorum.
       * This parameter is used only for local Rook cluster running in normal mode
       * and will be ignored if external or stretched mode is used.
       * leading
       */
      externalMonIDs?: string[];
      failureDomainLabel?: string;
      /**
       * StretchCluster is the stretch cluster specification
       */
      stretchCluster?: {
        /**
         * FailureDomainLabel the failure domain name (e,g: zone)
         */
        failureDomainLabel?: string;
        /**
         * SubFailureDomain is the failure domain within a zone
         */
        subFailureDomain?: string;
        /**
         * Zones is the list of zones
         */
        zones?: {
          /**
           * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
           */
          arbiter?: boolean;
          /**
           * Name is the name of the zone
           */
          name?: string;
          /**
           * VolumeClaimTemplate is the PVC template
           */
          volumeClaimTemplate?: {
            /**
             * Standard object's metadata.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: {
              annotations?: {
                [k: string]: string;
              };
              finalizers?: string[];
              labels?: {
                [k: string]: string;
              };
              name?: string;
              namespace?: string;
              [k: string]: unknown;
            };
            /**
             * spec defines the desired characteristics of a volume requested by a pod author.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
             */
            spec?: {
              /**
               * accessModes contains the desired access modes the volume should have.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
               */
              accessModes?: string[];
              /**
               * dataSource field can be used to specify either:
               * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
               * * An existing PVC (PersistentVolumeClaim)
               * If the provisioner or an external controller can support the specified data source,
               * it will create a new volume based on the contents of the specified data source.
               * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
               * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
               * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
               */
              dataSource?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                [k: string]: unknown;
              };
              /**
               * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
               * volume is desired. This may be any object from a non-empty API group (non
               * core object) or a PersistentVolumeClaim object.
               * When this field is specified, volume binding will only succeed if the type of
               * the specified object matches some installed volume populator or dynamic
               * provisioner.
               * This field will replace the functionality of the dataSource field and as such
               * if both fields are non-empty, they must have the same value. For backwards
               * compatibility, when namespace isn't specified in dataSourceRef,
               * both fields (dataSource and dataSourceRef) will be set to the same
               * value automatically if one of them is empty and the other is non-empty.
               * When namespace is specified in dataSourceRef,
               * dataSource isn't set to the same value and must be empty.
               * There are three important differences between dataSource and dataSourceRef:
               * * While dataSource only allows two specific types of objects, dataSourceRef
               *   allows any non-core object, as well as PersistentVolumeClaim objects.
               * * While dataSource ignores disallowed values (dropping them), dataSourceRef
               *   preserves all values, and generates an error if a disallowed value is
               *   specified.
               * * While dataSource only allows local objects, dataSourceRef allows objects
               *   in any namespaces.
               * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
               * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
               */
              dataSourceRef?: {
                /**
                 * APIGroup is the group for the resource being referenced.
                 * If APIGroup is not specified, the specified Kind must be in the core API group.
                 * For any other third-party types, APIGroup is required.
                 */
                apiGroup?: string;
                /**
                 * Kind is the type of resource being referenced
                 */
                kind: string;
                /**
                 * Name is the name of resource being referenced
                 */
                name: string;
                /**
                 * Namespace is the namespace of resource being referenced
                 * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                 * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                 */
                namespace?: string;
                [k: string]: unknown;
              };
              /**
               * resources represents the minimum resources the volume should have.
               * Users are allowed to specify resource requirements
               * that are lower than previous value but must still be higher than capacity recorded in the
               * status field of the claim.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
               */
              resources?: {
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
               * selector is a label query over volumes to consider for binding.
               */
              selector?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 */
                matchExpressions?: {
                  /**
                   * key is the label key that the selector applies to.
                   */
                  key: string;
                  /**
                   * operator represents a key's relationship to a set of values.
                   * Valid operators are In, NotIn, Exists and DoesNotExist.
                   */
                  operator: string;
                  /**
                   * values is an array of string values. If the operator is In or NotIn,
                   * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                   * the values array must be empty. This array is replaced during a strategic
                   * merge patch.
                   */
                  values?: string[];
                  [k: string]: unknown;
                }[];
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                 * map is equivalent to an element of matchExpressions, whose key field is "key", the
                 * operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                matchLabels?: {
                  [k: string]: string;
                };
                [k: string]: unknown;
              };
              /**
               * storageClassName is the name of the StorageClass required by the claim.
               * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
               */
              storageClassName?: string;
              /**
               * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
               * If specified, the CSI driver will create or update the volume with the attributes defined
               * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
               * it can be changed after the claim is created. An empty string or nil value indicates that no
               * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
               * this field can be reset to its previous value (including nil) to cancel the modification.
               * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
               * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
               * exists.
               * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
               */
              volumeAttributesClassName?: string;
              /**
               * volumeMode defines what type of volume is required by the claim.
               * Value of Filesystem is implied when not included in claim spec.
               */
              volumeMode?: string;
              /**
               * volumeName is the binding reference to the PersistentVolume backing this claim.
               */
              volumeName?: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      /**
       * VolumeClaimTemplate is the PVC definition
       */
      volumeClaimTemplate?: {
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        metadata?: {
          annotations?: {
            [k: string]: string;
          };
          finalizers?: string[];
          labels?: {
            [k: string]: string;
          };
          name?: string;
          namespace?: string;
          [k: string]: unknown;
        };
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        spec?: {
          /**
           * accessModes contains the desired access modes the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          accessModes?: string[];
          /**
           * dataSource field can be used to specify either:
           * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
           * * An existing PVC (PersistentVolumeClaim)
           * If the provisioner or an external controller can support the specified data source,
           * it will create a new volume based on the contents of the specified data source.
           * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
           * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
           * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
           */
          dataSource?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            [k: string]: unknown;
          };
          /**
           * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
           * volume is desired. This may be any object from a non-empty API group (non
           * core object) or a PersistentVolumeClaim object.
           * When this field is specified, volume binding will only succeed if the type of
           * the specified object matches some installed volume populator or dynamic
           * provisioner.
           * This field will replace the functionality of the dataSource field and as such
           * if both fields are non-empty, they must have the same value. For backwards
           * compatibility, when namespace isn't specified in dataSourceRef,
           * both fields (dataSource and dataSourceRef) will be set to the same
           * value automatically if one of them is empty and the other is non-empty.
           * When namespace is specified in dataSourceRef,
           * dataSource isn't set to the same value and must be empty.
           * There are three important differences between dataSource and dataSourceRef:
           * * While dataSource only allows two specific types of objects, dataSourceRef
           *   allows any non-core object, as well as PersistentVolumeClaim objects.
           * * While dataSource ignores disallowed values (dropping them), dataSourceRef
           *   preserves all values, and generates an error if a disallowed value is
           *   specified.
           * * While dataSource only allows local objects, dataSourceRef allows objects
           *   in any namespaces.
           * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          dataSourceRef?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * resources represents the minimum resources the volume should have.
           * Users are allowed to specify resource requirements
           * that are lower than previous value but must still be higher than capacity recorded in the
           * status field of the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          resources?: {
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
           * selector is a label query over volumes to consider for binding.
           */
          selector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
              [k: string]: unknown;
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          /**
           * storageClassName is the name of the StorageClass required by the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          storageClassName?: string;
          /**
           * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
           * If specified, the CSI driver will create or update the volume with the attributes defined
           * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
           * it can be changed after the claim is created. An empty string or nil value indicates that no
           * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
           * this field can be reset to its previous value (including nil) to cancel the modification.
           * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
           * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
           * exists.
           * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
           */
          volumeAttributesClassName?: string;
          /**
           * volumeMode defines what type of volume is required by the claim.
           * Value of Filesystem is implied when not included in claim spec.
           */
          volumeMode?: string;
          /**
           * volumeName is the binding reference to the PersistentVolume backing this claim.
           */
          volumeName?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Zones are specified when we want to provide zonal awareness to mons
       */
      zones?: {
        /**
         * Arbiter determines if the zone contains the arbiter used for stretch cluster mode
         */
        arbiter?: boolean;
        /**
         * Name is the name of the zone
         */
        name?: string;
        /**
         * VolumeClaimTemplate is the PVC template
         */
        volumeClaimTemplate?: {
          /**
           * Standard object's metadata.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
           */
          metadata?: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * spec defines the desired characteristics of a volume requested by a pod author.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
           */
          spec?: {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: string[];
            /**
             * dataSource field can be used to specify either:
             * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
             * * An existing PVC (PersistentVolumeClaim)
             * If the provisioner or an external controller can support the specified data source,
             * it will create a new volume based on the contents of the specified data source.
             * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
             * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
             * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
             */
            dataSource?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              [k: string]: unknown;
            };
            /**
             * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
             * volume is desired. This may be any object from a non-empty API group (non
             * core object) or a PersistentVolumeClaim object.
             * When this field is specified, volume binding will only succeed if the type of
             * the specified object matches some installed volume populator or dynamic
             * provisioner.
             * This field will replace the functionality of the dataSource field and as such
             * if both fields are non-empty, they must have the same value. For backwards
             * compatibility, when namespace isn't specified in dataSourceRef,
             * both fields (dataSource and dataSourceRef) will be set to the same
             * value automatically if one of them is empty and the other is non-empty.
             * When namespace is specified in dataSourceRef,
             * dataSource isn't set to the same value and must be empty.
             * There are three important differences between dataSource and dataSourceRef:
             * * While dataSource only allows two specific types of objects, dataSourceRef
             *   allows any non-core object, as well as PersistentVolumeClaim objects.
             * * While dataSource ignores disallowed values (dropping them), dataSourceRef
             *   preserves all values, and generates an error if a disallowed value is
             *   specified.
             * * While dataSource only allows local objects, dataSourceRef allows objects
             *   in any namespaces.
             * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
             * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            dataSourceRef?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              /**
               * Namespace is the namespace of resource being referenced
               * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
               * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
               */
              namespace?: string;
              [k: string]: unknown;
            };
            /**
             * resources represents the minimum resources the volume should have.
             * Users are allowed to specify resource requirements
             * that are lower than previous value but must still be higher than capacity recorded in the
             * status field of the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
             */
            resources?: {
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
             * selector is a label query over volumes to consider for binding.
             */
            selector?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              matchExpressions?: {
                /**
                 * key is the label key that the selector applies to.
                 */
                key: string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                operator: string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
               * map is equivalent to an element of matchExpressions, whose key field is "key", the
               * operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: string;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string or nil value indicates that no
             * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
             * this field can be reset to its previous value (including nil) to cancel the modification.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             */
            volumeAttributesClassName?: string;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Prometheus based Monitoring settings
     */
    monitoring?: {
      /**
       * Enabled determines whether to create the prometheus rules for the ceph cluster. If true, the prometheus
       * types must exist or the creation will fail. Default is false.
       */
      enabled?: boolean;
      /**
       * Ceph exporter configuration
       */
      exporter?: {
        /**
         * Whether host networking is enabled for CephExporter. If not set, the network settings from CephCluster.spec.networking will be applied.
         */
        hostNetwork?: boolean;
        /**
         * Only performance counters greater than or equal to this option are fetched
         */
        perfCountersPrioLimit?: number;
        /**
         * Port is the listening port of the ceph-exporter process. Defaults to 9926.
         */
        port?: number;
        /**
         * Time to wait before sending requests again to exporter server (seconds)
         */
        statsPeriodSeconds?: number;
        [k: string]: unknown;
      };
      /**
       * ExternalMgrEndpoints points to an existing Ceph prometheus exporter endpoint
       */
      externalMgrEndpoints?: {
        /**
         * The Hostname of this endpoint
         */
        hostname?: string;
        /**
         * The IP of this endpoint.
         * May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10),
         * or link-local multicast (224.0.0.0/24 or ff02::/16).
         */
        ip: string;
        /**
         * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
         */
        nodeName?: string;
        /**
         * Reference to object providing the endpoint.
         */
        targetRef?: {
          /**
           * API version of the referent.
           */
          apiVersion?: string;
          /**
           * If referring to a piece of an object instead of an entire object, this string
           * should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
           * For example, if the object reference is to a container within a pod, this would take on a value like:
           * "spec.containers{name}" (where "name" refers to the name of the container that triggered
           * the event) or if no container name is specified "spec.containers[2]" (container with
           * index 2 in this pod). This syntax is chosen only to have some well-defined way of
           * referencing a part of an object.
           */
          fieldPath?: string;
          /**
           * Kind of the referent.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
           */
          kind?: string;
          /**
           * Name of the referent.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          name?: string;
          /**
           * Namespace of the referent.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
           */
          namespace?: string;
          /**
           * Specific resourceVersion to which this reference is made, if any.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
           */
          resourceVersion?: string;
          /**
           * UID of the referent.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
           */
          uid?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * ExternalMgrPrometheusPort Prometheus exporter port
       */
      externalMgrPrometheusPort?: number;
      /**
       * Interval determines prometheus scrape interval
       */
      interval?: string;
      /**
       * Whether to disable the metrics reported by Ceph. If false, the prometheus mgr module and Ceph exporter are enabled.
       * If true, the prometheus mgr module and Ceph exporter are both disabled. Default is false.
       */
      metricsDisabled?: boolean;
      /**
       * Port is the prometheus server port
       */
      port?: number;
      [k: string]: unknown;
    };
    /**
     * Network related configuration
     */
    network?: {
      /**
       * AddressRanges specify a list of CIDRs that Rook will apply to Ceph's 'public_network' and/or
       * 'cluster_network' configurations. This config section may be used for the "host" or "multus"
       * network providers.
       */
      addressRanges?: {
        /**
         * Cluster defines a list of CIDRs to use for Ceph cluster network communication.
         */
        cluster?: string[];
        /**
         * Public defines a list of CIDRs to use for Ceph public network communication.
         */
        public?: string[];
        [k: string]: unknown;
      };
      /**
       * Settings for network connections such as compression and encryption across the
       * wire.
       */
      connections?: {
        /**
         * Compression settings for the network connections.
         */
        compression?: {
          /**
           * Whether to compress the data in transit across the wire.
           * The default is not set.
           */
          enabled?: boolean;
          [k: string]: unknown;
        };
        /**
         * Encryption settings for the network connections.
         */
        encryption?: {
          /**
           * Whether to encrypt the data in transit across the wire to prevent eavesdropping
           * the data on the network. The default is not set. Even if encryption is not enabled,
           * clients still establish a strong initial authentication for the connection
           * and data integrity is still validated with a crc check. When encryption is enabled,
           * all communication between clients and Ceph daemons, or between Ceph daemons will
           * be encrypted.
           */
          enabled?: boolean;
          [k: string]: unknown;
        };
        /**
         * Whether to require msgr2 (port 3300) even if compression or encryption are not enabled.
         * If true, the msgr1 port (6789) will be disabled.
         * Requires a kernel that supports msgr2 (kernel 5.11 or CentOS 8.4 or newer).
         */
        requireMsgr2?: boolean;
        [k: string]: unknown;
      };
      /**
       * DualStack determines whether Ceph daemons should listen on both IPv4 and IPv6
       */
      dualStack?: boolean;
      /**
       * HostNetwork to enable host network.
       * If host networking is enabled or disabled on a running cluster, then the operator will automatically fail over all the mons to
       * apply the new network settings.
       */
      hostNetwork?: boolean;
      /**
       * IPFamily is the single stack IPv6 or IPv4 protocol
       */
      ipFamily?: 'IPv4' | 'IPv6';
      /**
       * Enable multiClusterService to export the Services between peer clusters
       */
      multiClusterService?: {
        /**
         * ClusterID uniquely identifies a cluster. It is used as a prefix to nslookup exported
         * services. For example: <clusterid>.<svc>.<ns>.svc.clusterset.local
         */
        clusterID?: string;
        /**
         * Enable multiClusterService to export the mon and OSD services to peer cluster.
         * Ensure that peer clusters are connected using an MCS API compatible application,
         * like Globalnet Submariner.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * Provider is what provides network connectivity to the cluster e.g. "host" or "multus".
       * If the Provider is updated from being empty to "host" on a running cluster, then the operator will automatically fail over all the mons to apply the "host" network settings.
       */
      provider?: '' | 'host' | 'multus';
      /**
       * Selectors define NetworkAttachmentDefinitions to be used for Ceph public and/or cluster
       * networks when the "multus" network provider is used. This config section is not used for
       * other network providers.
       *
       * Valid keys are "public" and "cluster". Refer to Ceph networking documentation for more:
       * https://docs.ceph.com/en/latest/rados/configuration/network-config-ref/
       *
       * Refer to Multus network annotation documentation for help selecting values:
       * https://github.com/k8snetworkplumbingwg/multus-cni/blob/master/docs/how-to-use.md#run-pod-with-network-annotation
       *
       * Rook will make a best-effort attempt to automatically detect CIDR address ranges for given
       * network attachment definitions. Rook's methods are robust but may be imprecise for
       * sufficiently complicated networks. Rook's auto-detection process obtains a new IP address
       * lease for each CephCluster reconcile. If Rook fails to detect, incorrectly detects, only
       * partially detects, or if underlying networks do not support reusing old IP addresses, it is
       * best to use the 'addressRanges' config section to specify CIDR ranges for the Ceph cluster.
       *
       * As a contrived example, one can use a theoretical Kubernetes-wide network for Ceph client
       * traffic and a theoretical Rook-only network for Ceph replication traffic as shown:
       *   selectors:
       *     public: "default/cluster-fast-net"
       *     cluster: "rook-ceph/ceph-backend-net"
       */
      selectors?: {
        [k: string]: string;
      };
      [k: string]: unknown;
    };
    placement?: {
      [k: string]: {
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
    };
    /**
     * PriorityClassNames sets priority classes on components
     */
    priorityClassNames?: {
      [k: string]: string;
    };
    /**
     * Remove the OSD that is out and safe to remove only if this option is true
     */
    removeOSDsIfOutAndSafeToRemove?: boolean;
    /**
     * Resources set resource requests and limits
     */
    resources?: {
      /**
       * ResourceRequirements describes the compute resource requirements.
       */
      [k: string]: {
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
    };
    /**
     * Security represents security settings
     */
    security?: {
      /**
       * CephX configures CephX key settings. More: https://docs.ceph.com/en/latest/dev/cephx/
       */
      cephx?: {
        /**
         * CSI configures CephX key rotation settings for the Ceph-CSI daemons in the current Kubernetes cluster.
         * CSI key rotation can affect existing PV connections, so take care when exercising this option.
         */
        csi?: {
          /**
           * KeepPriorKeyCountMax tells Rook how many prior keys to keep active.
           * Generally, this would be set to 1 to allow for a migration period for applications.
           * If desired, set this to 0 to delete prior keys after migration.
           * This config only applies to prior keys that already exist.
           * If PriorKeyCount is set to 2 while only a single key currently exists, only a single prior key will be kept,
           * and the reported status will only indicate the actual number of prior keys,
           * not necessarily a reflection of PriorKeyCount config here.
           */
          keepPriorKeyCountMax?: number;
          /**
           * KeyGeneration specifies the desired CephX key generation. This is used when KeyRotationPolicy
           * is KeyGeneration and ignored for other policies. If this is set to greater than the current
           * key generation, relevant keys will be rotated, and the generation value will be updated to
           * this new value (generation values are not necessarily incremental, though that is the
           * intended use case). If this is set to less than or equal to the current key generation, keys
           * are not rotated.
           */
          keyGeneration?: number;
          /**
           * KeyRotationPolicy controls if and when CephX keys are rotated after initial creation.
           * One of Disabled, or KeyGeneration. Default Disabled.
           */
          keyRotationPolicy?: '' | 'Disabled' | 'KeyGeneration';
          [k: string]: unknown;
        };
        /**
         * Daemon configures CephX key settings for local Ceph daemons managed by Rook and part of the
         * Ceph cluster. Daemon CephX keys can be rotated without affecting client connections.
         */
        daemon?: {
          /**
           * KeyGeneration specifies the desired CephX key generation. This is used when KeyRotationPolicy
           * is KeyGeneration and ignored for other policies. If this is set to greater than the current
           * key generation, relevant keys will be rotated, and the generation value will be updated to
           * this new value (generation values are not necessarily incremental, though that is the
           * intended use case). If this is set to less than or equal to the current key generation, keys
           * are not rotated.
           */
          keyGeneration?: number;
          /**
           * KeyRotationPolicy controls if and when CephX keys are rotated after initial creation.
           * One of Disabled, or KeyGeneration. Default Disabled.
           */
          keyRotationPolicy?: '' | 'Disabled' | 'KeyGeneration';
          [k: string]: unknown;
        };
        /**
         * RBDMirrorPeer configures CephX key settings of the `rbd-mirror-peer` user that is used for creating
         * bootstrap peer token used connect peer clusters. Rotating the `rbd-mirror-peer` user key will update
         * the mirror peer token.
         * Rotation will affect any existing peers connected to this cluster, so take care when exercising this option.
         */
        rbdMirrorPeer?: {
          /**
           * KeyGeneration specifies the desired CephX key generation. This is used when KeyRotationPolicy
           * is KeyGeneration and ignored for other policies. If this is set to greater than the current
           * key generation, relevant keys will be rotated, and the generation value will be updated to
           * this new value (generation values are not necessarily incremental, though that is the
           * intended use case). If this is set to less than or equal to the current key generation, keys
           * are not rotated.
           */
          keyGeneration?: number;
          /**
           * KeyRotationPolicy controls if and when CephX keys are rotated after initial creation.
           * One of Disabled, or KeyGeneration. Default Disabled.
           */
          keyRotationPolicy?: '' | 'Disabled' | 'KeyGeneration';
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * KeyRotation defines options for rotation of OSD disk encryption keys.
       */
      keyRotation?: {
        /**
         * Enabled represents whether the key rotation is enabled.
         */
        enabled?: boolean;
        /**
         * Schedule represents the cron schedule for key rotation.
         */
        schedule?: string;
        [k: string]: unknown;
      };
      /**
       * KeyManagementService is the main Key Management option
       */
      kms?: {
        /**
         * ConnectionDetails contains the KMS connection details (address, port etc)
         */
        connectionDetails?: {
          [k: string]: string;
        };
        /**
         * TokenSecretName is the kubernetes secret containing the KMS token
         */
        tokenSecretName?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * SkipUpgradeChecks defines if an upgrade should be forced even if one of the check fails
     */
    skipUpgradeChecks?: boolean;
    /**
     * A spec for available storage in the cluster and how it should be used
     */
    storage?: {
      /**
       * Whether to allow updating the device class after the OSD is initially provisioned
       */
      allowDeviceClassUpdate?: boolean;
      /**
       * Whether Rook will resize the OSD CRUSH weight when the OSD PVC size is increased.
       * This allows cluster data to be rebalanced to make most effective use of new OSD space.
       * The default is false since data rebalancing can cause temporary cluster slowdown.
       */
      allowOsdCrushWeightUpdate?: boolean;
      /**
       * BackfillFullRatio is the ratio at which the cluster is too full for backfill. Backfill will be disabled if above this threshold. Default is 0.90.
       */
      backfillFullRatio?: number;
      config?: {
        [k: string]: string;
      };
      /**
       * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
       */
      deviceFilter?: string;
      /**
       * A regular expression to allow more fine-grained selection of devices with path names
       */
      devicePathFilter?: string;
      /**
       * List of devices to use as storage devices
       */
      devices?: {
        config?: {
          [k: string]: string;
        };
        fullpath?: string;
        name?: string;
        [k: string]: unknown;
      }[];
      /**
       * FlappingRestartIntervalHours defines the time for which the OSD pods, that failed with zero exit code, will sleep before restarting.
       * This is needed for OSD flapping where OSD daemons are marked down more than 5 times in 600 seconds by Ceph.
       * Preventing the OSD pods to restart immediately in such scenarios will prevent Rook from marking OSD as `up` and thus
       * peering of the PGs mapped to the OSD.
       * User needs to manually restart the OSD pod if they manage to fix the underlying OSD flapping issue before the restart interval.
       * The sleep will be disabled if this interval is set to 0.
       */
      flappingRestartIntervalHours?: number;
      /**
       * FullRatio is the ratio at which the cluster is considered full and ceph will stop accepting writes. Default is 0.95.
       */
      fullRatio?: number;
      /**
       * Migration handles the OSD migration
       */
      migration?: {
        /**
         * A user confirmation to migrate the OSDs. It destroys each OSD one at a time, cleans up the backing disk
         * and prepares OSD with same ID on that disk
         */
        confirmation?: string;
        [k: string]: unknown;
      };
      /**
       * NearFullRatio is the ratio at which the cluster is considered nearly full and will raise a ceph health warning. Default is 0.85.
       */
      nearFullRatio?: number;
      nodes?: {
        config?: {
          [k: string]: string;
        };
        /**
         * A regular expression to allow more fine-grained selection of devices on nodes across the cluster
         */
        deviceFilter?: string;
        /**
         * A regular expression to allow more fine-grained selection of devices with path names
         */
        devicePathFilter?: string;
        /**
         * List of devices to use as storage devices
         */
        devices?: {
          config?: {
            [k: string]: string;
          };
          fullpath?: string;
          name?: string;
          [k: string]: unknown;
        }[];
        name?: string;
        /**
         * ResourceRequirements describes the compute resource requirements.
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
         * Whether to consume all the storage devices found on a machine
         */
        useAllDevices?: boolean;
        /**
         * PersistentVolumeClaims to use as storage
         */
        volumeClaimTemplates?: {
          /**
           * Standard object's metadata.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
           */
          metadata?: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * spec defines the desired characteristics of a volume requested by a pod author.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
           */
          spec?: {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: string[];
            /**
             * dataSource field can be used to specify either:
             * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
             * * An existing PVC (PersistentVolumeClaim)
             * If the provisioner or an external controller can support the specified data source,
             * it will create a new volume based on the contents of the specified data source.
             * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
             * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
             * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
             */
            dataSource?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              [k: string]: unknown;
            };
            /**
             * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
             * volume is desired. This may be any object from a non-empty API group (non
             * core object) or a PersistentVolumeClaim object.
             * When this field is specified, volume binding will only succeed if the type of
             * the specified object matches some installed volume populator or dynamic
             * provisioner.
             * This field will replace the functionality of the dataSource field and as such
             * if both fields are non-empty, they must have the same value. For backwards
             * compatibility, when namespace isn't specified in dataSourceRef,
             * both fields (dataSource and dataSourceRef) will be set to the same
             * value automatically if one of them is empty and the other is non-empty.
             * When namespace is specified in dataSourceRef,
             * dataSource isn't set to the same value and must be empty.
             * There are three important differences between dataSource and dataSourceRef:
             * * While dataSource only allows two specific types of objects, dataSourceRef
             *   allows any non-core object, as well as PersistentVolumeClaim objects.
             * * While dataSource ignores disallowed values (dropping them), dataSourceRef
             *   preserves all values, and generates an error if a disallowed value is
             *   specified.
             * * While dataSource only allows local objects, dataSourceRef allows objects
             *   in any namespaces.
             * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
             * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            dataSourceRef?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              /**
               * Namespace is the namespace of resource being referenced
               * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
               * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
               */
              namespace?: string;
              [k: string]: unknown;
            };
            /**
             * resources represents the minimum resources the volume should have.
             * Users are allowed to specify resource requirements
             * that are lower than previous value but must still be higher than capacity recorded in the
             * status field of the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
             */
            resources?: {
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
             * selector is a label query over volumes to consider for binding.
             */
            selector?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              matchExpressions?: {
                /**
                 * key is the label key that the selector applies to.
                 */
                key: string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                operator: string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
               * map is equivalent to an element of matchExpressions, whose key field is "key", the
               * operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: string;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string or nil value indicates that no
             * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
             * this field can be reset to its previous value (including nil) to cancel the modification.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             */
            volumeAttributesClassName?: string;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      onlyApplyOSDPlacement?: boolean;
      /**
       * The maximum number of OSDs to update in parallel.
       */
      osdMaxUpdatesInParallel?: number;
      /**
       * Whether to always schedule OSDs on a node even if the node is not currently scheduleable or ready
       */
      scheduleAlways?: boolean;
      storageClassDeviceSets?: {
        /**
         * Provider-specific device configuration
         */
        config?: {
          [k: string]: string;
        };
        /**
         * Count is the number of devices in this set
         */
        count: number;
        /**
         * Whether to encrypt the deviceSet
         */
        encrypted?: boolean;
        /**
         * Name is a unique identifier for the set
         */
        name: string;
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
         * Portable represents OSD portability across the hosts
         */
        portable?: boolean;
        preparePlacement?: {
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
         * ResourceRequirements describes the compute resource requirements.
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
         * Scheduler name for OSD pod placement
         */
        schedulerName?: string;
        /**
         * TuneSlowDeviceClass Tune the OSD when running on a slow Device Class
         */
        tuneDeviceClass?: boolean;
        /**
         * TuneFastDeviceClass Tune the OSD when running on a fast Device Class
         */
        tuneFastDeviceClass?: boolean;
        /**
         * VolumeClaimTemplates is a list of PVC templates for the underlying storage devices
         */
        volumeClaimTemplates: {
          /**
           * Standard object's metadata.
           * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
           */
          metadata?: {
            annotations?: {
              [k: string]: string;
            };
            finalizers?: string[];
            labels?: {
              [k: string]: string;
            };
            name?: string;
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * spec defines the desired characteristics of a volume requested by a pod author.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
           */
          spec?: {
            /**
             * accessModes contains the desired access modes the volume should have.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
             */
            accessModes?: string[];
            /**
             * dataSource field can be used to specify either:
             * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
             * * An existing PVC (PersistentVolumeClaim)
             * If the provisioner or an external controller can support the specified data source,
             * it will create a new volume based on the contents of the specified data source.
             * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
             * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
             * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
             */
            dataSource?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              [k: string]: unknown;
            };
            /**
             * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
             * volume is desired. This may be any object from a non-empty API group (non
             * core object) or a PersistentVolumeClaim object.
             * When this field is specified, volume binding will only succeed if the type of
             * the specified object matches some installed volume populator or dynamic
             * provisioner.
             * This field will replace the functionality of the dataSource field and as such
             * if both fields are non-empty, they must have the same value. For backwards
             * compatibility, when namespace isn't specified in dataSourceRef,
             * both fields (dataSource and dataSourceRef) will be set to the same
             * value automatically if one of them is empty and the other is non-empty.
             * When namespace is specified in dataSourceRef,
             * dataSource isn't set to the same value and must be empty.
             * There are three important differences between dataSource and dataSourceRef:
             * * While dataSource only allows two specific types of objects, dataSourceRef
             *   allows any non-core object, as well as PersistentVolumeClaim objects.
             * * While dataSource ignores disallowed values (dropping them), dataSourceRef
             *   preserves all values, and generates an error if a disallowed value is
             *   specified.
             * * While dataSource only allows local objects, dataSourceRef allows objects
             *   in any namespaces.
             * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
             * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            dataSourceRef?: {
              /**
               * APIGroup is the group for the resource being referenced.
               * If APIGroup is not specified, the specified Kind must be in the core API group.
               * For any other third-party types, APIGroup is required.
               */
              apiGroup?: string;
              /**
               * Kind is the type of resource being referenced
               */
              kind: string;
              /**
               * Name is the name of resource being referenced
               */
              name: string;
              /**
               * Namespace is the namespace of resource being referenced
               * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
               * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
               */
              namespace?: string;
              [k: string]: unknown;
            };
            /**
             * resources represents the minimum resources the volume should have.
             * Users are allowed to specify resource requirements
             * that are lower than previous value but must still be higher than capacity recorded in the
             * status field of the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
             */
            resources?: {
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
             * selector is a label query over volumes to consider for binding.
             */
            selector?: {
              /**
               * matchExpressions is a list of label selector requirements. The requirements are ANDed.
               */
              matchExpressions?: {
                /**
                 * key is the label key that the selector applies to.
                 */
                key: string;
                /**
                 * operator represents a key's relationship to a set of values.
                 * Valid operators are In, NotIn, Exists and DoesNotExist.
                 */
                operator: string;
                /**
                 * values is an array of string values. If the operator is In or NotIn,
                 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                 * the values array must be empty. This array is replaced during a strategic
                 * merge patch.
                 */
                values?: string[];
                [k: string]: unknown;
              }[];
              /**
               * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
               * map is equivalent to an element of matchExpressions, whose key field is "key", the
               * operator is "In", and the values array contains only "value". The requirements are ANDed.
               */
              matchLabels?: {
                [k: string]: string;
              };
              [k: string]: unknown;
            };
            /**
             * storageClassName is the name of the StorageClass required by the claim.
             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
             */
            storageClassName?: string;
            /**
             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
             * If specified, the CSI driver will create or update the volume with the attributes defined
             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
             * it can be changed after the claim is created. An empty string or nil value indicates that no
             * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
             * this field can be reset to its previous value (including nil) to cancel the modification.
             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
             * exists.
             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
             */
            volumeAttributesClassName?: string;
            /**
             * volumeMode defines what type of volume is required by the claim.
             * Value of Filesystem is implied when not included in claim spec.
             */
            volumeMode?: string;
            /**
             * volumeName is the binding reference to the PersistentVolume backing this claim.
             */
            volumeName?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      /**
       * OSDStore is the backend storage type used for creating the OSDs
       */
      store?: {
        /**
         * Type of backend storage to be used while creating OSDs. If empty, then bluestore will be used
         */
        type?: 'bluestore' | 'bluestore-rdr';
        /**
         * UpdateStore updates the backend store for existing OSDs. It destroys each OSD one at a time, cleans up the backing disk
         * and prepares same OSD on that disk
         */
        updateStore?: string;
        [k: string]: unknown;
      };
      /**
       * Whether to consume all the storage devices found on a machine
       */
      useAllDevices?: boolean;
      useAllNodes?: boolean;
      /**
       * PersistentVolumeClaims to use as storage
       */
      volumeClaimTemplates?: {
        /**
         * Standard object's metadata.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
         */
        metadata?: {
          annotations?: {
            [k: string]: string;
          };
          finalizers?: string[];
          labels?: {
            [k: string]: string;
          };
          name?: string;
          namespace?: string;
          [k: string]: unknown;
        };
        /**
         * spec defines the desired characteristics of a volume requested by a pod author.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
         */
        spec?: {
          /**
           * accessModes contains the desired access modes the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          accessModes?: string[];
          /**
           * dataSource field can be used to specify either:
           * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
           * * An existing PVC (PersistentVolumeClaim)
           * If the provisioner or an external controller can support the specified data source,
           * it will create a new volume based on the contents of the specified data source.
           * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
           * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
           * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
           */
          dataSource?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            [k: string]: unknown;
          };
          /**
           * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
           * volume is desired. This may be any object from a non-empty API group (non
           * core object) or a PersistentVolumeClaim object.
           * When this field is specified, volume binding will only succeed if the type of
           * the specified object matches some installed volume populator or dynamic
           * provisioner.
           * This field will replace the functionality of the dataSource field and as such
           * if both fields are non-empty, they must have the same value. For backwards
           * compatibility, when namespace isn't specified in dataSourceRef,
           * both fields (dataSource and dataSourceRef) will be set to the same
           * value automatically if one of them is empty and the other is non-empty.
           * When namespace is specified in dataSourceRef,
           * dataSource isn't set to the same value and must be empty.
           * There are three important differences between dataSource and dataSourceRef:
           * * While dataSource only allows two specific types of objects, dataSourceRef
           *   allows any non-core object, as well as PersistentVolumeClaim objects.
           * * While dataSource ignores disallowed values (dropping them), dataSourceRef
           *   preserves all values, and generates an error if a disallowed value is
           *   specified.
           * * While dataSource only allows local objects, dataSourceRef allows objects
           *   in any namespaces.
           * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          dataSourceRef?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * resources represents the minimum resources the volume should have.
           * Users are allowed to specify resource requirements
           * that are lower than previous value but must still be higher than capacity recorded in the
           * status field of the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          resources?: {
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
           * selector is a label query over volumes to consider for binding.
           */
          selector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
              [k: string]: unknown;
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          /**
           * storageClassName is the name of the StorageClass required by the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          storageClassName?: string;
          /**
           * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
           * If specified, the CSI driver will create or update the volume with the attributes defined
           * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
           * it can be changed after the claim is created. An empty string or nil value indicates that no
           * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
           * this field can be reset to its previous value (including nil) to cancel the modification.
           * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
           * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
           * exists.
           * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
           */
          volumeAttributesClassName?: string;
          /**
           * volumeMode defines what type of volume is required by the claim.
           * Value of Filesystem is implied when not included in claim spec.
           */
          volumeMode?: string;
          /**
           * volumeName is the binding reference to the PersistentVolume backing this claim.
           */
          volumeName?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * UpgradeOSDRequiresHealthyPGs defines if OSD upgrade requires PGs are clean. If set to `true` OSD upgrade process won't start until PGs are healthy.
     * This configuration will be ignored if `skipUpgradeChecks` is `true`.
     * Default is false.
     */
    upgradeOSDRequiresHealthyPGs?: boolean;
    /**
     * WaitTimeoutForHealthyOSDInMinutes defines the time the operator would wait before an OSD can be stopped for upgrade or restart.
     * If the timeout exceeds and OSD is not ok to stop, then the operator would skip upgrade for the current OSD and proceed with the next one
     * if `continueUpgradeAfterChecksEvenIfNotHealthy` is `false`. If `continueUpgradeAfterChecksEvenIfNotHealthy` is `true`, then operator would
     * continue with the upgrade of an OSD even if its not ok to stop after the timeout. This timeout won't be applied if `skipUpgradeChecks` is `true`.
     * The default wait timeout is 10 minutes.
     */
    waitTimeoutForHealthyOSDInMinutes?: number;
    [k: string]: unknown;
  };
  /**
   * ClusterStatus represents the status of a Ceph cluster
   */
  status?: {
    /**
     * CephStatus is the details health of a Ceph Cluster
     */
    ceph?: {
      /**
       * Capacity is the capacity information of a Ceph Cluster
       */
      capacity?: {
        bytesAvailable?: number;
        bytesTotal?: number;
        bytesUsed?: number;
        lastUpdated?: string;
        [k: string]: unknown;
      };
      details?: {
        /**
         * CephHealthMessage represents the health message of a Ceph Cluster
         */
        [k: string]: {
          message: string;
          severity: string;
          [k: string]: unknown;
        };
      };
      fsid?: string;
      health?: string;
      lastChanged?: string;
      lastChecked?: string;
      previousHealth?: string;
      /**
       * CephDaemonsVersions show the current ceph version for different ceph daemons
       */
      versions?: {
        /**
         * CephFSMirror shows CephFSMirror Ceph version
         */
        'cephfs-mirror'?: {
          [k: string]: number;
        };
        /**
         * Mds shows Mds Ceph version
         */
        mds?: {
          [k: string]: number;
        };
        /**
         * Mgr shows Mgr Ceph version
         */
        mgr?: {
          [k: string]: number;
        };
        /**
         * Mon shows Mon Ceph version
         */
        mon?: {
          [k: string]: number;
        };
        /**
         * Osd shows Osd Ceph version
         */
        osd?: {
          [k: string]: number;
        };
        /**
         * Overall shows overall Ceph version
         */
        overall?: {
          [k: string]: number;
        };
        /**
         * RbdMirror shows RbdMirror Ceph version
         */
        'rbd-mirror'?: {
          [k: string]: number;
        };
        /**
         * Rgw shows Rgw Ceph version
         */
        rgw?: {
          [k: string]: number;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * ClusterCephxStatus defines the cephx key rotation status of various daemons on the cephCluster resource
     */
    cephx?: {
      /**
       * Admin shows the CephX key status for the client.admin key
       */
      admin?: {
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
      /**
       * Ceph Exporter represents the cephx key rotation status of the ceph exporter daemon
       */
      cephExporter?: {
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
      /**
       * Crash Collector represents the cephx key rotation status of the crash collector daemon
       */
      crashCollector?: {
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
      /**
       * CSI shows the CephX key status for Ceph-CSI components.
       */
      csi?: {
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
        /**
         * PriorKeyCount reports the number of prior-generation CephX keys that remain active for the related component
         */
        priorKeyCount?: number;
        [k: string]: unknown;
      };
      /**
       * Mgr represents the cephx key rotation status of the ceph manager daemon
       */
      mgr?: {
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
      /**
       * Mon represents the CephX key status of the Monitor daemons
       */
      mon?: {
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
      /**
       * OSD shows the CephX key status of of OSDs
       */
      osd?: {
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
      /**
       * RBDMirrorPeer represents the cephx key rotation status of the `rbd-mirror-peer` user
       */
      rbdMirrorPeer?: {
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
    message?: string;
    /**
     * ObservedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * ConditionType represent a resource's status
     */
    phase?: string;
    /**
     * ClusterState represents the state of a Ceph Cluster
     */
    state?: string;
    /**
     * CephStorage represents flavors of Ceph Cluster Storage
     */
    storage?: {
      deprecatedOSDs?: {
        [k: string]: number[];
      };
      deviceClasses?: {
        name?: string;
        [k: string]: unknown;
      }[];
      /**
       * OSDStatus represents OSD status of the ceph Cluster
       */
      osd?: {
        /**
         * MigrationStatus status represents the current status of any OSD migration.
         */
        migrationStatus?: {
          pending?: number;
          [k: string]: unknown;
        };
        /**
         * StoreType is a mapping between the OSD backend stores and number of OSDs using these stores
         */
        storeType?: {
          [k: string]: number;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * ClusterVersion represents the version of a Ceph Cluster
     */
    version?: {
      image?: string;
      version?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
